import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link, Stack } from "@chakra-ui/react";
import Links from "./links";
import { IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
const Header = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className="bg-amber-200"
      >
        {/* logo */}
        <Box>
          <Heading size="6xl" className="text-fuchsia-700">
            NIK<span className="text-violet-700">e</span>
          </Heading>
        </Box>

        {/* links */}
        <Box>
          <Stack direction="row">
            {Links.map((link) => (
              <Link key={link.id} href="#">
                {link.label}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* icons */}
        <Box>
          <Stack direction="row">
            <IconButton aria-label="Search database">
              <LuSearch />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Header;
