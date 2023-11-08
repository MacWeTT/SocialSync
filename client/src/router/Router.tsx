import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/components/UI/Layout/Layout";

//Routers
import HomeRouter from "./HomeRouter";
import AuthRouter from "./AuthRouter";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<HomeRouter />} />
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
