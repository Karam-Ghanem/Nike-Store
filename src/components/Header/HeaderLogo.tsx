import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box>
    <Heading size={{base:"3xl",sm:"4xl",md:"6xl"}} className="text-fuchsia-700">
      NIK<span className="text-violet-700">e</span>
    </Heading>
  </Box>
  )
}

export default Logo
