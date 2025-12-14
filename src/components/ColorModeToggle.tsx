import { Button, } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    <Button onClick={toggleColorMode}>
      Switch to {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
    </>
  );
}

export default ColorModeToggle;
