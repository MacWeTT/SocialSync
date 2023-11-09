import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";

//CSS Files
import "../../styles/index.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen overflow-y-hidden">
      <Navbar />
      <div className="flex">
        <main className="container mx-auto overflow-y-scroll">{children}</main>
        <footer>Yes, this is the footer.</footer>
      </div>
    </div>
  );
};

export default Layout;
