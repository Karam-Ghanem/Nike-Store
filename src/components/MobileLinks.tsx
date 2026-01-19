import { Box } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import Links from "./Header/links";
import { Link } from "react-router-dom";

const MobileLinks = () => {
  return (
    <>
      <Box className="md:hidden">
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="outline" size="sm">
              <FaBars color="#a800b7" />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner
              width={{ base: "100px", sm: "300px" }}
              maxWidth="100%"
            >
              <Menu.Content marginLeft="-150px" marginTop="20px">
                {Links.map((link) => (
                  <Box
                    key={link.id}
                    borderBottom="1px solid #fcfc "
                    width="100%"
                  >
                    <Menu.Item
                      fontSize={16}
                      value="new-txt"
                      color="#c571cd"
                      bg="transparent"
                      fontWeight={600}
                      _hover={{
                        color: "#4d06a3",
                        cursor: "pointer",
                        marginLeft: "30px",
                      }}
                      transition="0.5s"
                    >
                      <Link to={link.href}>
                        <Text padding={3}>{link.label}</Text>
                      </Link>
                    </Menu.Item>
                  </Box>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
    </>
  );
};

export default MobileLinks;
