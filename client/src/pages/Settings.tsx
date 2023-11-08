import { Box, Text, VStack } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Box>
      <Text as="h1" className="settings-header">
        Settings
      </Text>
      <Box className="settings-container">
        <Box className="settings-list">
          <VStack>
            <Text>Edit Profile</Text>
            <Text>Appearance</Text>
            <Text>Saved</Text>
          </VStack>
        </Box>
        <Box className="settings-content"></Box>
      </Box>
    </Box>
  );
};

export default Settings;
