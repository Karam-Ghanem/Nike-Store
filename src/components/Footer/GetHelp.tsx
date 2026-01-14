
import FooterTitle from "./FooterTitle";
import { List, Box } from "@chakra-ui/react";

const GetHelp = () => {
  return (
    <Box marginBottom={{ base: 6, sm: 6, lg: 0 }}>
      <FooterTitle head="Get Help" />
      <List.Root gap="2" variant="plain" align="center">
        <List.Item>FAQ</List.Item>
        <List.Item>Shipping</List.Item>
        <List.Item>Returns</List.Item>
        <List.Item>Payment Options</List.Item>
      </List.Root>
    </Box>
  );
}

export default GetHelp
