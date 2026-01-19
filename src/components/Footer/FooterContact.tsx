import FooterTitle from "./FooterTitle";
import { FaHouse } from "react-icons/fa6";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { List, Box } from "@chakra-ui/react";
const FooterContact = () => {
  return (
    <Box marginBottom={{base:6,sm:6,lg:0}} >
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
          +963 938309217
        </List.Item>

        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaEnvelope />
          </List.Indicator>
          karamghanem34@gmail.com
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaEnvelope />
          </List.Indicator>
          naghamlaila1@gmail.com
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaEnvelope />
          </List.Indicator>
          nawwaribrahem2@gmail.com
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="#ba1e9a">
            <FaEnvelope />
          </List.Indicator>
          reemhasan3@gmail.com
        </List.Item>
      </List.Root>
    </Box>
  );
};

export default FooterContact;
