import { Box } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import FooterTitle from "./FooterTitle";

const FollwUs = () => {
  return (
    <Box marginBottom={{ base: 6, sm: 6, lg: 0 }} >
      <FooterTitle head="Follow Us" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        bg={""}
        height={40}
      >
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </Box>
    </Box>
  );
};

export default FollwUs;
