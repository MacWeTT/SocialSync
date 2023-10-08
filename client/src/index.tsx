import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./common/theme/theme";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Layout
import Layout from "./common/components/UI/Layout/Layout";

//Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
