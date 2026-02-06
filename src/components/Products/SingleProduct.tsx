import { Box, Heading, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import AddToCartButton from "../PublicCompontents/AddToCartButton";
import MainHead from "../PublicCompontents/MainHead";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import ProductsList from "./productsList";
import View360 from "../About/View360";



const SingleProduct = () => {

   const { id } = useParams();
   const currentProduct = ProductsList.find((product2)=>product2.id===id)
   

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 1, lg: 1, xl: 2 }}
        gap={20}
        marginTop={30}
        marginBottom={35}
      >
        <Box className="shadow-xl flex justify-center">
          <Image src={currentProduct?.productImg} width={"96"} />
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
          <Input
            defaultValue={1}
            type="number"
            width={20}
            marginBottom={8}
            border={"1px solid #7008e7"}
            fontSize={20}
            min={1}
          />
          <AddToCartButton product={currentProduct} />
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
