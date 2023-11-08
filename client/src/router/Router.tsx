import { BrowserRouter, Routes, Route } from "react-router-dom";

//Routers
import HomeRouter from "./HomeRouter";
import AuthRouter from "./AuthRouter";
import NotFound from "../pages/NotFound";

//Theme
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../common/theme/theme";

const Router = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Routes>
          <Route path="/*" element={<HomeRouter />} />
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default Router;
