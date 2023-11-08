import { Link } from "react-router-dom";
import { Box, Flex, VStack, Text, IconButton } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <>
      <Box className="sidebar">
        <Flex
          direction="column"
          justifyContent="space-between"
          height="100%"
          position="relative"
        >
          <VStack gap={6} align="flex-start" mt={6}>
            <Text as="h1" className="nav-logo">
              <Link to="/">SocialSync</Link>
            </Text>
            <NavItem
              type="link"
              link="/"
              icon={<AiOutlineHome />}
              name="Home"
            />
            <NavItem
              type="link"
              link="/search"
              icon={<AiOutlineSearch />}
              name="Search"
            />
            <NavItem
              type="link"
              link="/explore"
              icon={<AiOutlineCompass />}
              name="Explore"
            />
            <NavItem
              type="link"
              name="Messages"
              link="/messages"
              icon={<BiMessageDetail />}
            />
            <NavItem
              type="link"
              link="/notifications"
              name="Notifications"
              icon={<AiOutlineHeart />}
            />
          </VStack>
          <Flex mb={8} alignItems="center">
            <IconButton className="more-btn" aria-label="Home" fontSize={24}>
              <RxHamburgerMenu />
            </IconButton>
            <Text fontSize={20} fontWeight="semibold">
              More
            </Text>
          </Flex>
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
