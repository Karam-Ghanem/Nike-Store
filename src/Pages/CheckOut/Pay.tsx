import MainHead from "@/components/PublicCompontents/MainHead";
import { Box, Button, Card, Center, Image, SimpleGrid } from "@chakra-ui/react";
import paymentMethod from "./Data/PaymentMethod";
import { Link } from "react-router-dom";


const Pay  = () => {

  return (
    <>
      <MainHead head="PAYMENT" />
      <Center>
        <SimpleGrid columns={2} gap={20}>
          {paymentMethod.map((payment) => (
            <Card.Root
              key={payment.value}
              flexDirection="row"
              overflow="hidden"
              maxW="96"
            >
              <Image
                width={"180px"}
                height={"170px"}
                objectFit="cover"
                maxW="200px"
                src={payment.logo}
                alt="Pay Method"
              />
              <Box>
                <Card.Body>
                  <Card.Title mb="2">{payment.label}</Card.Title>
                  <Card.Description>{payment.description}</Card.Description>
                </Card.Body>
                <Card.Footer>
                  <Button bg={"#7008e7"}>
                    <Link to={`wallet/${payment.value}`}>Continue To Pay</Link>
                  </Button>
                </Card.Footer>
              </Box>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};


export default Pay;