import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const PageWrapper = ({ children }: Props) => {
  return <Box className="page-wrapper">{children}</Box>;
};

export default PageWrapper;
