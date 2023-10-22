import { useState } from "react";
import { Box, Flex, IconButton, VStack } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

import NavItem from "./NavItem";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box
      width={open ? "230px" : "80px"}
      backgroundColor="gray.200"
      py={8}
      px={5}
      pr={open ? 5 : 1}
      transition={"0.5s ease"}
      position="fixed"
      height="100vh"
      zIndex="1000"
      overflow="hidden"
    >
      <Flex direction="column" justifyContent="space-between" height="100%">
        <VStack gap={8} align="flex-start">
          <NavItem text="Home" link="/" icon={<AiOutlineHome />} />
          <NavItem text="Search" link="/search" icon={<AiOutlineSearch />} />
          <NavItem text="Explore" link="/explore" icon={<AiOutlineCompass />} />
          <NavItem
            text="Messages"
            link="/messages"
            icon={<BiMessageDetail />}
          />
          <NavItem
            text="Notifications"
            link="/notifications"
            icon={<AiOutlineHeart />}
          />
          <NavItem text="Profile" link="/profile" icon={<AiOutlineUser />} />
          <NavItem text="Settings" link="/settings" icon={<FiSettings />} />
        </VStack>
        <IconButton
          aria-label="More"
          fontSize={24}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineChevronLeft /> : <HiOutlineChevronRight />}
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Sidebar;