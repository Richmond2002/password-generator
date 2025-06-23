export function generatePassword(
  length: number,
  options: {
    lowercase: boolean;
    uppercase: boolean;
    symbols: boolean;
    numbers: boolean;
  }
): string {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbol = "!@$&#";
  const number = "0123456789";

  let allowedChars = "";
  if (options.lowercase) allowedChars += lower;
  if (options.uppercase) allowedChars += upper;
  if (options.symbols) allowedChars += symbol;
  if (options.numbers) allowedChars += number;

  if (parseInt(allowedChars) < 14)
    return "Password must be at least 14 characters long";

  if (!allowedChars) return "";

  return Array.from(
    { length },
    () => allowedChars[Math.floor(Math.random() * allowedChars.length)]
  ).join("");
}
