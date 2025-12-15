import { Stack } from "@chakra-ui/react";

import HeaderLogo from "./HeaderLogo";
import HeaderLinks from "./HeaderLinks";
import HeaderIcons from "./HeaderIcons";
import MobileLinks from "../MobileLinks";

const Header = () => {
  return (
    <>
      <Stack
        padding="10px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        // className="bg-amber-200"
        className="shadow-lg p-6 rounded-md"
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
    </>
  );
};

export default Header;
