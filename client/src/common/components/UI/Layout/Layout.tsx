import { ReactNode, useContext } from "react";
import Navbar from "../Navbar";
import PageWrapper from "../PageWrapper";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer";

//Theme
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { darkTheme, lightTheme } from "../../../theme/theme";
import { ThemeContext } from "../../../../utils/ThemeContext";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { darkMode } = useContext(ThemeContext)!;

  return (
    <ChakraProvider theme={darkMode ? lightTheme : darkTheme}>
      <CSSReset />
      <Sidebar />
      <PageWrapper>
        <Navbar />
        {children}
        <Footer />
      </PageWrapper>
    </ChakraProvider>
  );
};

export default Layout;
