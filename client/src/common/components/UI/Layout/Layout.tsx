import { ReactNode, useContext } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer";

//Theme
import { Box, ChakraProvider, CSSReset, Flex } from "@chakra-ui/react";
import { darkTheme, lightTheme } from "../../../theme/theme";
import { ThemeContext } from "../../../../utils/ThemeContext";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const darkMode = useContext(ThemeContext);

  return (
    <ChakraProvider theme={darkMode ? lightTheme : darkTheme}>
      <CSSReset />
      <Flex minHeight="100vh">
        <Sidebar />
        <Box
          marginLeft="230px"
          minWidth="calc(100% - 230px)"
          borderLeft="2px"
          borderColor="gray.200"
        >
          <Navbar />
          {children}
        </Box>
      </Flex>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
