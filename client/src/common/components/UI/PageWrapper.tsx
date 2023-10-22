import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const PageWrapper = ({ children }: Props) => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      position="relative"
      minHeight="100vh"
      mx="auto"
      maxWidth="1200px"
    >
      {children}
    </Flex>
  );
};

export default PageWrapper;
