import { Box, Heading } from "@chakra-ui/react";

interface Props{
  head:string
}

const MainHead = ({head}:Props) => {
  return (
    <>
      <Box textAlign="center" marginTop={{base:"40px",sm:"40px",lg:"100px"}} marginBottom="50px">
        <Heading size={{base:"5xl",sm:"5xl",md:"6xl",lg:"7xl",xl:"7xl"}} color="#7008e7">
          {head}
        </Heading>
      </Box>
    </>
  );
};

export default MainHead;
