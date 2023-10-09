import { extendTheme } from "@chakra-ui/react";
import { lightColors, darkColors } from "./colors";

const darkTheme = extendTheme({
  darkColors,
});

const lightTheme = extendTheme({
  lightColors,
});

export { darkTheme, lightTheme };
