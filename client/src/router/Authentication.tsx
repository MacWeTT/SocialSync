import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";

const Authentication = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default Authentication;
