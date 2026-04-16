import { Box, Button, Field, Heading, HStack, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import AddToCartButton from "../PublicCompontents/AddToCartButton";
import MainHead from "../PublicCompontents/MainHead";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import View360 from "../About/View360";
import { useState } from "react";
import { useEffect } from "react";
import useCartStore from "@/Pages/Cart/cartStore";
import { Toaster, toaster } from "@/components/ui/toaster";
import useProductStore from "./ProductStore";

interface UserChosen {
  shoseSize: string;
  choseQuantity: number;
}

const SingleProduct = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


   const { id } = useParams();
      const { cartItems, deleteProductFromCart } = useCartStore();
      const {products} = useProductStore()

   const currentProduct = products.find((product2) => product2.id === id);

   const [userChosen,setUserChosen] = useState<UserChosen>({
    shoseSize:'',
    choseQuantity:1,
   })
   

  return (
    <>
      <Toaster />
      <SimpleGrid
        columns={{ base: 1, sm: 1, lg: 1, xl: 2 }}
        gap={20}
        marginTop={30}
        marginBottom={35}
      >
        <Box className="shadow-xl flex justify-center">
          <Image src={currentProduct?.productImg} width={"96"} height={"96"} />
        </Box>
        <Box>
          <Heading size={"3xl"} marginBottom={2}>
            {currentProduct?.productName}
          </Heading>
          <Text marginBottom={4} fontSize={18}>
            {currentProduct?.category}
          </Text>
          <Text marginBottom={4} fontSize={18}>
            {currentProduct?.productPrice}
          </Text>
          <Text marginBottom={4} fontSize={16} color={"#777"}>
            {currentProduct?.productDescription}
          </Text>
          {/* Sizes */}
          <Box marginY={5}>
            {currentProduct?.sizes.map((size) => (
              <Button
                onClick={() =>
                  setUserChosen({ ...userChosen, shoseSize: size })
                }
                bg={userChosen.shoseSize === size ? "#7008e7" : "#7777"}
                color={userChosen.shoseSize === size ? "white" : "black"}
                fontSize={12}
                size={"sm"}
                marginEnd={1}
                marginBottom={1}
                key={size}
              >
                {size}
              </Button>
            ))}
          </Box>
          <Box marginBottom={4}>
            <Field.Root marginTop={3}>
              <Field.Label fontSize={"15px"}>Chose quantity :</Field.Label>
              <Input
                value={userChosen.choseQuantity}
                onChange={(e) =>{
                  setUserChosen({
                    ...userChosen,
                    choseQuantity: parseInt(e.target.value),
                  });
                }
                }
                min={1}
                width={"100px"}
                type="number"
                required
                border={"1px solid #a800b7"}
              />
              <Field.ErrorText></Field.ErrorText>
            </Field.Root>
          </Box>
          <HStack>
            <AddToCartButton
              currentShoeseID={currentProduct?.id + userChosen.shoseSize}
              isSelectSize={userChosen.shoseSize ? false : true}
              currentShoeseSize={userChosen.shoseSize}
              currentShoeseQuantity={userChosen.choseQuantity}
              product={currentProduct}
            />
            <Button
              onClick={() => {
                deleteProductFromCart(
                  currentProduct?.id + userChosen.shoseSize
                );
                toaster.create({
                  title: "Product Deleted From your Cart Successfully!",
                  type: "success",
                  duration: 5000,
                });
              }}
              display={
                cartItems
                  .map((item) => item.currentShoeseID)
                  .includes(currentProduct?.id + userChosen.shoseSize)
                  ? "block"
                  : "none"
              }
              borderRadius={20}
              bg={"red"}
              color={"white"}
              _hover={{ bg: "white", color: "red" }}
              transition={"0.8s"}
            >
              Remove
            </Button>
          </HStack>
        </Box>
      </SimpleGrid>
      {/* 360° View  */}
      <MainHead head=" 360° View" />
      <View360 />
      {/* Related Products */}
      <Box>
        <MainHead head="Related Products" />
        <RelatedProducts />
      </Box>
    </>
  );
};

export default SingleProduct;
