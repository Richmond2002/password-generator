import {
  Box,
  Button,
  Fieldset,
  Heading,
  HStack,
  Input,
  Slider,
  Switch,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { generatePassword } from "./assets/utils/generatePassword";

function App() {
  const [length, setLength] = useState<number>(14);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const pwd = generatePassword(length, {
      lowercase,
      uppercase,
      symbols,
      numbers,
    });
    setPassword(pwd);
  };

  return (
    <Box
      p={8}
      maxW="md"
      mx="auto"
      mt={10}
      borderWidth={1}
      borderRadius="lg"
      shadow="md"
    >
      <VStack borderSpacing={4} align="stretch">
        <Heading size="lg" textAlign="center">
          🔐 Password Generator
        </Heading>
        <Fieldset.Root>
          <Fieldset.Legend>Password Length: {length}</Fieldset.Legend>
        </Fieldset.Root>

        <HStack borderSpacing={4}>
          <Fieldset.Root display="flex" textAlign="center">
            <Fieldset.Legend mb="0">Lowercase</Fieldset.Legend>
          </Fieldset.Root>
          <Switch.Root
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          >
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
          <Fieldset.Root display="flex" textAlign="center">
            <Fieldset.Legend mb="0">Uppercase</Fieldset.Legend>
          </Fieldset.Root>
          <Switch.Root
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          >
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
        </HStack>

        <HStack borderSpacing={4}>
          <Fieldset.Root display="flex" textAlign="center">
            <Fieldset.Legend mb="0">Symbols</Fieldset.Legend>
          </Fieldset.Root>
          <Switch.Root checked={symbols} onChange={() => setSymbols(!symbols)}>
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
          <Fieldset.Root display="flex" textAlign="center">
            <Fieldset.Legend mb="0">Numbers</Fieldset.Legend>
          </Fieldset.Root>
          <Switch.Root checked={numbers} onChange={() => setNumbers(!numbers)}>
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
        </HStack>

        <Input
          value={password}
          readOnly
          placeholder="Your password will apper here"
        />

        <HStack borderSpacing={4}>
          <Button colorScheme="teal" onClick={handleGeneratePassword}>
            Generate Password
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
export default App;
