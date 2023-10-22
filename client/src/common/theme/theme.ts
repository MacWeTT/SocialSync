import { extendTheme } from "@chakra-ui/react";
import { lightColors, darkColors } from "./colors";

const darkTheme = extendTheme({
  colors: darkColors,
});

const lightTheme = extendTheme({
  colors: lightColors,
});

export { darkTheme, lightTheme };
