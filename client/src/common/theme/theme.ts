import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import darkColors from "./colors";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ ...config, ...breakpoints, darkColors });

export default theme;
