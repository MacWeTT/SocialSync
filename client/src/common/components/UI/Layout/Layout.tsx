import { ReactNode } from "react";
// import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Sidebar";
import PageWrapper from "../PageWrapper";

//CSS Files
import "../../../../styles/index.css";
import "../../../../styles/elements.css";
import "../../../../styles/pages.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="grid lg:grid-cols-6">
      <Sidebar />
      {/* <Navbar /> */}
      <PageWrapper>{children}</PageWrapper>
    </main>
  );
};

export default Layout;
