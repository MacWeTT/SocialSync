import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import darkColors from "./colors";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ ...config, darkColors });

export default theme;
