import { Flex, Text } from "@chakra-ui/react";
import NavItem from "./Sidebar/NavItem";

import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <Flex className="nav" as="nav" backgroundColor="primary">
      <Text as="h1" className="nav-logo">
        SocialSync
      </Text>
      <Flex justifyContent="flex-end" alignItems="center" className="nav-links">
        <NavItem type="link" link="/search" icon={<AiOutlineSearch />} />
        <NavItem type="link" link="/messages" icon={<BiMessageDetail />} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
