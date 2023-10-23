import Login from "../pages/user/Login";
import { Route, Routes } from "react-router-dom";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AuthRouter;
