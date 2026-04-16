import MainHead from "@/components/PublicCompontents/MainHead";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Syriatel from "@/assets/Syriatel.jpg";
import MTN from "@/assets/MTN.png";
import ShamCash from "@/assets/ShamCash.jpg";
import usdt from "@/assets/usdt.png";
import { Field, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { Toaster, toaster } from "@/components/ui/toaster";
import useCartStore from "../Cart/cartStore";

interface Transaction {
  walletAddress: string;
  transactionID: string;
}

const Wallet = () => {
  const { type } = useParams();
  const navigate = useNavigate()
  const [transactionData, setTransactionData] = useState<Transaction>({
    walletAddress: "66233636",
    transactionID: "",
  });
  const paymentData = {
    syriatelcash: {
      typee: "syriatelcash",
      head: "Syriatel Cash",
      title: "Recharge via Syriatel Cash",
      img: Syriatel,
      description:
        "Send any Amount You Want to the Wallet Address Shown to you Using the Manual Transfer method with no minimum sending amount, then enter the successful Transaction ID. The transaction will be processed automatically and the transaction balance will be added to your account. ",
    },
    mtncash: {
      typee: "mtncash",
      head: "MTN Cash",
      title: "Recharge via MTN Cash",
      img: MTN,
      description:
        "Send any Amount You Want to the Wallet Address Shown to you Using the Manual Transfer method with no minimum sending amount, then enter the successful Transaction ID. The transaction will be processed automatically and the transaction balance will be added to your account. ",
    },
    shamcash: {
      typee: "shamcash",
      head: "Sham Cash",
      title: "Recharge via Sham Cash",
      img: ShamCash,
      description:
        "Send any amount you want to the wallet address shown to you using only USD or SYP, with no minimum amount required, then enter the successful transaction number. The transaction will be processed within minutes, and the balance will be added to your account. ",
    },
    usdt: {
      typee: "usdt",
      head: "USDT",
      title: "Recharge via Crypto",
      img: usdt,
      description:
        "Enter the amount you want to pay in USD and recharge your wallet with cryptocurrency.",
    },
  };

  type PaymentKey = keyof typeof paymentData;

  const data = paymentData[type as PaymentKey];
  const { getTotalPrice, cartItems,addProductsToMyPurchases } = useCartStore();


  return (
    <>
      <Toaster />
      <MainHead head={data.head} />
      <Box padding={20} paddingTop={0}>
        <Box bg={"#f3f4f6"} padding={10}>
          <VStack>
            <Image src={data.img} />
            <Heading as={"h2"}>{data.title}</Heading>
          </VStack>
          <Text marginTop={6} fontSize={14} color={"#777"}>
            {data.description}
          </Text>
          <Box marginTop={6}>
            <Box fontWeight={"bold"}>
              <Text>
                Total amount of purchases :
                <Span color={"#957cd6"}>{getTotalPrice(cartItems)} $</Span>
              </Text>
              <Text>
                Shipping fees :<Span color={"#957cd6"}>10 $</Span>
              </Text>
              <Text>
                Final cost :
                <Span color={"#957cd6"}>{getTotalPrice(cartItems) + 10} $</Span>
              </Text>
            </Box>

            <Box fontWeight={"bold"}>
              Minimum :<Span color={"#957cd6"}>No Minimum</Span>
            </Box>
            <Box fontWeight={"bold"}>
              Fees : <Span color={"#957cd6"}>0% </Span>
            </Box>
            <Box fontWeight={"bold"}>
              Rate 1 Credit =<Span color={"#957cd6"}>129 </Span>SYP
            </Box>
          </Box>

          <Box marginTop={10}>
            <form>
              <HStack position={"relative"}>
                <Field.Root>
                  <Field.Label fontSize={"15px"}>Wallet Address:</Field.Label>
                  <Input
                    disabled
                    value={transactionData.walletAddress}
                    border={"1px solid #a800b7"}
                  />

                  <Field.ErrorText></Field.ErrorText>
                </Field.Root>
                <Button
                  right={0}
                  top={"42%"}
                  position={"absolute"}
                  size={"sm"}
                  bg={"#7008e7"}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      transactionData.walletAddress
                    );
                    toaster.create({
                      title: `Wallet Address has copied `,
                      type: "success",
                      duration: 5000,
                    });
                  }}
                >
                  <FiCopy />
                </Button>
              </HStack>
              <Field.Root marginTop={3}>
                <Field.Label fontSize={"15px"}>Transaction ID:</Field.Label>
                <Input
                  type="number"
                  required
                  value={transactionData.transactionID}
                  onChange={(e) => {
                    setTransactionData({
                      ...transactionData,
                      transactionID: e.target.value,
                    });
                  }}
                  border={"1px solid #a800b7"}
                  placeholder="Enter Transaction ID"
                />
                <Field.ErrorText></Field.ErrorText>
              </Field.Root>
              <Button
              type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setTransactionData({...transactionData,transactionID:""});
                  // addProductsToMyPurchases(cartItems,new Date().toISOString().split("T")[0]);
                  addProductsToMyPurchases(cartItems,new Date());
                  navigate('/mypurchases')
                }}
                marginTop={4}
                fontSize={18}
                width={"100%"}
                bg={"#7008e7"}
              >
                Recharge
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Wallet;
