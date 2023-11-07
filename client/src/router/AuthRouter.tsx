import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/auth/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AuthRouter;
