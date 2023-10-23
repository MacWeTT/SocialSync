import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default HomeRouter;
