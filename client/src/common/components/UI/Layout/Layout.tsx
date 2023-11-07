import { ReactNode } from "react";
import Navbar from "../Navbar";
import PageWrapper from "../PageWrapper";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer";

//Theme
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../../../theme/theme";

//CSS Files
import "../../../../styles/index.css";
import "../../../../styles/navbar.css";
import "../../../../styles/sidebar.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme}>
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
