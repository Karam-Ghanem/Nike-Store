import Links from "./links";
import { Container, Stack } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <Box className="hidden md:block">
      <Container>
        <Stack
          direction="row"
          justifyContent={{ sm: "start", md: "start", lg: "space-between" }}
        >
          {Links.map((link) => (
            <Link to={link.href}>
              <Text
                key={link.id}
                color="#a21caf"
                marginEnd={{ sm: "0.5", md: "2", lg: "6" }}
                fontSize={{ md: "16px", lg: "22px" }}
                _hover={{
                  color: "#4d06a3",
                  marginTop: "-8px",
                  cursor: "pointer",
                }}
                transition="0.5s"
              >
                {link.label}
              </Text>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderLinks;
