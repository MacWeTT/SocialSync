import { useNavigate, useLocation } from "react-router-dom";
import { IconButton, ChakraProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ChakraProps {
  type: string;
  link?: string;
  icon: ReactNode;
  name?: string;
  action?: () => void;
  props?: ChakraProps;
}

const NavItem = ({ type, link, name, icon, action, props }: Props) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  switch (type) {
    case "link":
      return (
        <Flex
          cursor="pointer"
          alignItems="center"
          onClick={() => {
            if (link) navigate(link);
          }}
        >
          <IconButton
            className="sidebar-btn"
            aria-label={`${link}`}
            fontSize={28}
            mr={4}
            backgroundColor={pathname === link ? "gray.200" : "transparent"}
          >
            {icon}
          </IconButton>
          <Text fontSize={20} fontWeight="bold">
            {name}
          </Text>
        </Flex>
      );
    case "button":
      return (
        <IconButton
          aria-label="Home"
          fontSize={24}
          onClick={action}
          {...props}
          mr={4}
          mx={2}
          backgroundColor="transparent"
        >
          {icon}
        </IconButton>
      );
    default:
      return null;
  }
};

export default NavItem;
