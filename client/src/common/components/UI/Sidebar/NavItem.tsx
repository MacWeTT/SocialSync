import { useNavigate, useLocation } from "react-router-dom";
import { IconButton, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ChakraProps {
  type: string;
  link?: string;
  icon: ReactNode;
  action?: () => void;
  props?: ChakraProps;
}

const NavItem = ({ type, link, icon, action, props }: Props) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  switch (type) {
    case "link":
      return (
        <IconButton
          className="sidebar-btn"
          onClick={() => {
            if (link) navigate(link);
          }}
          aria-label={`${link}`}
          fontSize={24}
          backgroundColor={pathname === link ? "gray.300" : "transparent"}
        >
          {icon}
        </IconButton>
      );
    case "button":
      return (
        <IconButton aria-label="Home" fontSize={24} onClick={action} {...props}>
          {icon}
        </IconButton>
      );
    default:
      return null;
  }
};

export default NavItem;
