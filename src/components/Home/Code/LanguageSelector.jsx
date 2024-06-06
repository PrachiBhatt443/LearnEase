import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "./contants";
const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR_LIGHT = "blue.600";
const ACTIVE_COLOR_DARK = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const activeColor = useColorModeValue(ACTIVE_COLOR_LIGHT, ACTIVE_COLOR_DARK);
  const menuBg = useColorModeValue("white", "gray.900");
  const hoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg={menuBg}>
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? activeColor : ""}
              bg={lang === language ? hoverBg : "transparent"}
              _hover={{
                color: activeColor,
                bg: hoverBg,
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
