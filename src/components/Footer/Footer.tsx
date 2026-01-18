import { Box, SimpleGrid } from "@chakra-ui/react";
import FooterContact from "./FooterContact";
import GetHelp from "./GetHelp";
import OurStores from "./OurStores";
import FollwUs from "./FollwUs";

const Footer = () => {
  return (
    <Box marginTop={40}>
      <SimpleGrid
        fontSize={{ base: 14, sm: 16, lg: 18, xl: 20 }}
        // position={"absolute"}
        width={"100%"}
        bottom={0}
        padding={10}
        paddingBottom={2}
        columns={{ base: 1, sm: 2, lg: 4, xl: 4 }}
        bg={"#f3f1f1"}
      >
        {/* Footer Contact */}
        <FooterContact />
        {/* Get Help */}
        <GetHelp />
        {/* Our Stores */}
        <OurStores />
        {/* Follw Us */}
        <FollwUs />
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
