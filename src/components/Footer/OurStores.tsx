import FooterTitle from "./FooterTitle";
import { List, Box } from "@chakra-ui/react";
const OurStores = () => {
  return (
    <Box marginBottom={{ base: 6, sm: 6, lg: 0 }}>
      <FooterTitle head="Our Stores" />
      <List.Root gap="2" variant="plain" align="center">
        <List.Item>Latakia</List.Item>
        <List.Item>Tartous</List.Item>
        <List.Item>Homs</List.Item>
        <List.Item>Aleppo</List.Item>
      </List.Root>
    </Box>
  );
};

export default OurStores;
