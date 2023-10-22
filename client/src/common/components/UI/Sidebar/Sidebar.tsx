import { useState } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import NavItem from "./NavItem";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box
      position="absolute"
      backgroundColor="gray.200"
      py={8}
      px={2}
      ml={4}
      rounded="md"
      top="50%"
      transition={"0.5s ease"}
      left={0}
      transform={
        open ? "translateY(-50%)" : "translateX(-80%) translateY(-50%)"
      }
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      zIndex="1000"
      overflow="hidden"
    >
      <Flex
        direction="column"
        justifyContent="space-between"
        height="100%"
        position="relative"
      >
        <VStack gap={5} align="flex-start">
          <NavItem type="link" link="/" icon={<AiOutlineHome />} />
          <NavItem type="link" link="/search" icon={<AiOutlineSearch />} />
          <NavItem type="link" link="/explore" icon={<AiOutlineCompass />} />
          <NavItem type="link" link="/messages" icon={<BiMessageDetail />} />
          <NavItem
            type="link"
            link="/notifications"
            icon={<AiOutlineHeart />}
          />
          <NavItem type="link" link="/profile" icon={<AiOutlineUser />} />
          <NavItem type="link" link="/settings" icon={<FiSettings />} />
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
