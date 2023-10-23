import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//Miscallaneous
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleClientID = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID!;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientID}>
      <Provider store={store}>
        <Router />
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
