import { useNavigate, useLocation } from "react-router-dom";
import { Flex, IconButton, ChakraProps } from "@chakra-ui/react";
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
        <Flex
          width="100%"
          _hover={{ backgroundColor: "gray.300" }}
          backgroundColor={pathname === link ? "gray.300" : "transparent"}
          borderRadius="md"
          p={2}
          transition={"background-color 0.4s ease"}
          alignItems="center"
          cursor={"pointer"}
          onClick={() => {
            if (link) navigate(link);
          }}
          {...props}
        >
          <IconButton aria-label="Home" fontSize={24}>
            {icon}
          </IconButton>
        </Flex>
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
