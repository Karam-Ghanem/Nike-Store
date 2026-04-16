import MainHead from "@/components/PublicCompontents/MainHead";
import { Box, Button, Card, Center, Image, SimpleGrid } from "@chakra-ui/react";
// import { useState } from "react";
import Syriatel from '@/assets/Syriatel.jpg'
import MTN from '@/assets/MTN.png'
import ShamCash from '@/assets/ShamCash.jpg'
import usdt from '@/assets/usdt.png'
import { Link } from "react-router-dom";
const Pay  = () => {
    const paymentMethod = [
      {
        label: "Syriatel Cash",
        description: "Syriatel Cash",
        value: "syriatelcash",
        logo: Syriatel,
      },
      {
        label: "MTN Cash",
        description: "Mtn Cash",
        value: "mtncash",
        logo: MTN,
      },
      {
        label: "Sham Cash",
        description: "Sham Cash",
        value: "shamcash",
        logo: ShamCash,
      },
      {
        label: "USDT",
        description: "Crypto (USDT,BTC,LTC)",
        value: "usdt",
        logo: usdt,
      },
    ];

    // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Choose payment method ▼");
    // const [logo,setLogo] = useState('')
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