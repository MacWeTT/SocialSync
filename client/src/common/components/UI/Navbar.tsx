import { useState } from "react";

const Navbar = () => {
  //eslint-disable-next-line
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <h1>Hello</h1>
    </nav>
  );
};

export default Navbar;
