import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";

//CSS Files
import "../../styles/index.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
