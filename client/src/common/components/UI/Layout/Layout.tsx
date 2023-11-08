import { ReactNode } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";
import PageWrapper from "../PageWrapper";

//Theme
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../../../theme/theme";

//CSS Files
import "../../../../styles/index.css";
import "../../../../styles/elements.css";
import "../../../../styles/pages.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Sidebar />
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
    </ChakraProvider>
  );
};

export default Layout;
