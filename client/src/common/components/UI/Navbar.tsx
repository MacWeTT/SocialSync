import { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";

import { Box } from "@chakra-ui/react";
import NavItem from "./Sidebar/NavItem";
import { BiSun, BiMoon } from "react-icons/bi";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Box
      as="nav"
      backgroundColor="primary"
      p={4}
      m={2}
      width="calc(100% - 32px)"
      borderRadius="md"
    >
      {darkMode ? (
        <NavItem type="button" icon={<BiSun />} action={toggleDarkMode} />
      ) : (
        <NavItem type="button" icon={<BiMoon />} action={toggleDarkMode} />
      )}
    </Box>
  );
};

export default Navbar;
