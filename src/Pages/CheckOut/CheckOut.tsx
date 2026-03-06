import MainHead from "@/components/PublicCompontents/MainHead";
import { Box, SimpleGrid,  } from "@chakra-ui/react";


import CheckOutForm from "./CheckOutForm";
import MyMap from "./MyMap";
import CheckOutTable from "./CheckOutTable";



const CheckOut = () => {
  return (
    <>
      <MainHead head="Check Out" />

      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} gap="40px">
        <Box>
          <CheckOutForm />
          <MyMap />
        </Box>
        <Box>
          <CheckOutTable />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default CheckOut;
