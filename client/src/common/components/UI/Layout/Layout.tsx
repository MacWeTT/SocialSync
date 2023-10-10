import {
  ReactNode,
  useContext,
  //  useEffect
} from "react";
// import { useGoogleOneTapLogin } from "@react-oauth/google";
import Navbar from "../Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import Footer from "../Footer";

//Theme
import { Box, ChakraProvider, CSSReset, Flex } from "@chakra-ui/react";
import { darkTheme, lightTheme } from "../../../theme/theme";
import { ThemeContext } from "../../../../utils/ThemeContext";

//Redux
// import { useSelector } from "react-redux";
// import { RootState } from "../../../../redux/store";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const darkMode = useContext(ThemeContext);
  // const user = useSelector((state: RootState) => state.user);

  return (
    <ChakraProvider theme={darkMode ? lightTheme : darkTheme}>
      <CSSReset />
      <Flex direction="column" minHeight="100vh">
        <Navbar />
        <Box ml="80px">
          <Sidebar />
          {children}
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default Layout;
