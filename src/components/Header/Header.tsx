import { Stack,Box } from "@chakra-ui/react";

import HeaderLogo from "./HeaderLogo";
import HeaderLinks from "./HeaderLinks";
import HeaderIcons from "./HeaderIcons";
import MobileLinks from "../MobileLinks";

const Header = () => {
  return (
    <Box>
      <Stack
        bg={"white"}
        padding="20px 30px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="shadow-lg  rounded-md"
      >
        {/* logo */}
        <HeaderLogo />

        {/* icons */}
        <HeaderIcons />

        {/* links on md lg */}
        <HeaderLinks />

        {/* Links on mobile */}
        <MobileLinks />
      </Stack>
    </Box>
  );
};

export default Header;
