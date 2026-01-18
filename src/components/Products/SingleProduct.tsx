import { Box, Heading, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import AddToCartButton from "../PublicCompontents/AddToCartButton";
import shoese1 from "@/assets/shoese/_3.jpeg";
import MainHead from "../PublicCompontents/MainHead";
import RelatedProducts from "./RelatedProducts";

const SingleProduct = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 1, lg: 1, xl: 2 }} gap={20}>
        {/*  */}
        <Box className="shadow-xl flex justify-center">
          <Image src={shoese1} width={"96"} />
        </Box>
        <Box>
          <Heading size={"4xl"} marginBottom={2}>
            Green apples have polyphenols
          </Heading>
          <Text marginBottom={4} fontSize={20}>
            Per Kg
          </Text>
          <Text marginBottom={4} fontSize={20}>
            $50
          </Text>
          <Text marginBottom={4} fontSize={18}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint
            dignissimos, rem commodi cum voluptatem quae reprehenderit
            repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos
            eum modi! Tempora, earum.
          </Text>
          <Input
            type="number"
            width={20}
            marginBottom={8}
            border={"1px solid #7008e7"}
            fontSize={20}
            min={0}
          />
          <AddToCartButton />
        </Box>
      </SimpleGrid>
      {/* Related Products */}
      <Box>
        <MainHead head="Related Products"/>
        <RelatedProducts/>
      </Box>
    </>
  );
};

export default SingleProduct;
