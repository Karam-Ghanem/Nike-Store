import { IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { Box, Stack } from "@chakra-ui/react";
import ColorModeToggle from "../ColorModeToggle";

const HeaderIcons = () => {
  return (
    <Box>
      <Stack direction="row">
        <IconButton bg="inherit" _hover={{ bg: "#f9f9fb" }}>
          <FaHeart  color="#7008e7" />
        </IconButton>

        <IconButton bg="inherit" _hover={{ bg: "#f9f9fb" }}>
          <FaShoppingCart color="#7008e7" />
        </IconButton>

        <IconButton bg="inherit" _hover={{ bg: "#f9f9fb" }}>
          <FaUser color="#7008e7" />
        </IconButton>
          <ColorModeToggle />
      </Stack>
    </Box>
  );
};

export default HeaderIcons;
