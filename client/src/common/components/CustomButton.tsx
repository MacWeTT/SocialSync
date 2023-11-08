import { useNavigate } from "react-router-dom";
import { Button, ButtonProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  variant: string;
  text: string;
  route?: string;
  icon?: ReactNode;
  props?: ButtonProps;
}

const CustomButton = ({
  variant,
  text,
  route,
  icon,
  onClick,
  ...props
}: CustomButtonProps) => {
  const navigate = useNavigate();
  const handleButtonRouting = () => {
    if (route) {
      navigate(route);
    }
  };

  switch (variant) {
    case "border":
      return (
        <Button
          border="2px"
          borderColor="primary"
          color="primary"
          bg="transparent"
          size="md"
          _hover={{
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
            bg: "tertiary",
            color: "quaternary",
          }}
          _focus={{ boxShadow: "none" }}
          _active={{
            transform: "scale(0.98)",
          }}
          onClick={route ? handleButtonRouting : onClick}
          {...props}
        >
          {text}
        </Button>
      );
    case "solid":
      return (
        <Button
          bgColor="primary"
          color="quaternary"
          size="md"
          _hover={{ bgColor: "tertiary" }}
          _focus={{ boxShadow: "none" }}
          _active={{
            bg: "tertiary",
            transform: "scale(0.98)",
          }}
          onClick={route ? handleButtonRouting : onClick}
          {...props}
        >
          {text}
        </Button>
      );
    case "border-icon":
      return (
        <Button
          border="2px"
          borderColor="primary"
          color="primary"
          bg="transparent"
          size="md"
          _hover={{
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
            bg: "tertiary",
            color: "quaternary",
          }}
          _focus={{ boxShadow: "none" }}
          _active={{
            transform: "scale(0.98)",
          }}
          onClick={route ? handleButtonRouting : onClick}
          {...props}
        >
          <Flex justifyContent="space-between" alignItems="center">
            {icon}
            <Text ml={2}>{text}</Text>
          </Flex>
        </Button>
      );
    case "solid-icon":
      return (
        <Button
          bgColor="primary"
          color="quaternary"
          size="md"
          _hover={{ bgColor: "tertiary" }}
          _focus={{ boxShadow: "none" }}
          _active={{
            bg: "tertiary",
            transform: "scale(0.98)",
          }}
          onClick={route ? handleButtonRouting : onClick}
          {...props}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text mr={2}>{text}</Text>
            {icon}
          </Flex>
        </Button>
      );
    default:
      break;
  }
  return null;
};

export default CustomButton;
