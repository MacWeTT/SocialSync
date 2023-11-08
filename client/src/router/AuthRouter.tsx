import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AuthRouter = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return (
    <Routes>
      <Route
        index
        element={
          isLoggedIn ? <Navigate to="/" /> : <Navigate to="/auth/login" />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AuthRouter;
