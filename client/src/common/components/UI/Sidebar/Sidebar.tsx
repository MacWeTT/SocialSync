import { useState } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineUser,
  AiOutlineHeart,
  // AiOutlineSearch,
} from "react-icons/ai";
// import { BiMessageDetail } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import NavItem from "./NavItem";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Box
        className="sidebar"
        transform={
          open ? "translateY(-50%)" : "translateX(-80%) translateY(-50%)"
        }
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Flex
          direction="column"
          justifyContent="space-between"
          height="100%"
          position="relative"
        >
          <VStack gap={5} align="flex-start">
            <NavItem type="link" link="/" icon={<AiOutlineHome />} />
            <NavItem type="link" link="/explore" icon={<AiOutlineCompass />} />
            {/* <NavItem type="link" link="/search" icon={<AiOutlineSearch />} />
            <NavItem type="link" link="/messages" icon={<BiMessageDetail />} /> */}
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
      <Box className="sidebar-tray">
        <Flex justifyContent="center" m={4}>
          <NavItem type="link" link="/" icon={<AiOutlineHome />} />
          <NavItem type="link" link="/explore" icon={<AiOutlineCompass />} />
          <NavItem
            type="link"
            link="/notifications"
            icon={<AiOutlineHeart />}
          />
          <NavItem type="link" link="/profile" icon={<AiOutlineUser />} />
          <NavItem type="link" link="/settings" icon={<FiSettings />} />
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
