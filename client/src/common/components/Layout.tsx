import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";

//CSS Files
import "../../styles/index.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <main className="main-container">
        <div className="content">{children}</div>
        <footer className="text-white"> This will be the footer.</footer>
      </main>
    </div>
  );
};

export default Layout;
