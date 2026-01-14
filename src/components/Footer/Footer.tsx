import { SimpleGrid } from "@chakra-ui/react";
import FooterContact from "./FooterContact";
import GetHelp from "./GetHelp";
import OurStores from "./OurStores";
import FollwUs from "./FollwUs";

const Footer = () => {
  return (
    <>
      <SimpleGrid
      fontSize={{base:14,sm:16 ,lg:18 ,xl:20}}
        padding={10}
        // gap={"20px"}
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
        <FollwUs/>
      </SimpleGrid>
    </>
  );
};

export default Footer;
