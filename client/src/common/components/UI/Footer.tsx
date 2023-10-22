import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgColor="primary"
      p={4}
      m={2}
      width="calc(100% - 32px)"
      borderRadius="md"
    >
      <Flex justifyContent="center" color="white">
        <Box>© 2023</Box>
        <Box ml={2}>Made by MacWeTT (a.k.a. Manas Bajpai)</Box>
      </Flex>
    </Box>
  );
};

export default Footer;
