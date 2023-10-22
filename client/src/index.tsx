import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Pages
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import NotFound from "./pages/NotFound";

//Miscallaneous
import Layout from "./common/components/UI/Layout/Layout";
import { ThemeProvider } from "./utils/ThemeContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./styles/index.css";

const googleClientID = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID!;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientID}>
      <ThemeProvider>
        <Provider store={store}>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
        </Provider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
