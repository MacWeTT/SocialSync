import { useNavigate, useLocation } from "react-router-dom";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  text: string;
  link: string;
  icon: ReactNode;
}

const NavItem = ({ text, link, icon }: Props) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
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
        navigate(link);
      }}
    >
      <IconButton aria-label="Home" fontSize={24}>
        {icon}
      </IconButton>
      <Text
        fontSize="lg"
        fontWeight={500}
        alignSelf="center"
        cursor={"pointer"}
        pl={4}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default NavItem;
