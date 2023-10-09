import { ReactNode,useContext } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { darkTheme, lightTheme } from "../../../theme/theme";
import { ThemeContext } from "../../../../utils/ThemeContext";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const darkMode = useContext(ThemeContext);
  return (
    <ChakraProvider  theme={darkMode ? lightTheme : darkTheme}>
      <CSSReset />
      <Navbar />
      {children}
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
