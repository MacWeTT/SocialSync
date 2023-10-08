import { useState } from "react";

const Navbar = () => {
  //eslint-disable-next-line
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <h1>Nav</h1>
    </div>
  );
};

export default Navbar;
