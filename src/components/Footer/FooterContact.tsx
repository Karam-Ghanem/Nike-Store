import FooterTitle from "./FooterTitle";
import { FaHouse } from "react-icons/fa6";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { List, Box, Link } from "@chakra-ui/react";
const FooterContact = () => {
  return (
    <Box marginBottom={{ base: 6, sm: 6, lg: 0 }}>
      <FooterTitle head="Contact" />
      <List.Root gap="2" variant="plain" align="center">
        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaHouse />
          </List.Indicator>
          Syria / Latakia
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaPhone />
          </List.Indicator>
          <Link target="_blank" href="https://wa.me/963939309217">
            +963 938309217
          </Link>
        </List.Item>

        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaEnvelope />
          </List.Indicator>
          <Link target="_blank" href="mailto:karamghanem34@gmail.com">
            karamghanem34@gmail.com
          </Link>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaEnvelope />
          </List.Indicator>
          <Link target="_blank" href="naghamlaila1@gmail.com">
            naghamlaila1@gmail.com
          </Link>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaEnvelope />
          </List.Indicator>
          <Link target="_blank" href="mailto:nawwaribrahem2@gmail.com">
            nawwaribrahem2@gmail.com
          </Link>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaEnvelope />
          </List.Indicator>

          <Link target="_blank" href="mailto:reemhasan3@gmail.com">
            reemhasan3@gmail.com
          </Link>
        </List.Item>
      </List.Root>
    </Box>
  );
};

export default FooterContact;
