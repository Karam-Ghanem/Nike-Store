import MainHead from "@/components/PublicCompontents/MainHead";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import CheckOutForm, { type AdressForm } from "./CheckOutForm";
import MyMap from "./MyMap";
import CheckOutTable from "./CheckOutTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface CheckOutForm {
  addressForm: AdressForm | undefined;
  address: string;
}

const CheckOut = () => {
  const navigate = useNavigate();
  const [addressForm, setAdressForm] = useState<AdressForm>();
  const [address, setAddress] = useState<string>("");
  const [, setCheckOutForm] = useState<CheckOutForm>({
    addressForm: {
      email: "",
      name: "",
      phone: "",
      saySomething: "",
    },
    address: "",
  });
  return (
    <>
      <MainHead head="CHECK OUT" />
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} gap="40px">
        <Box>
          <CheckOutForm sendAdressForm={(adress) => setAdressForm(adress)} />
          <MyMap sendAddress={(address) => setAddress(address)} />
          <Box marginTop={10}>
            <Button
              bg={"#7008e7"}
              onClick={() => {
                setCheckOutForm({
                  addressForm: addressForm,
                  address: address,
                });
                
                navigate("pay");
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box>
          <CheckOutTable />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default CheckOut;
