import { Box, IconButton, Text } from "@chakra-ui/react";
import MainHead from "../PublicCompontents/MainHead";
import { SimpleGrid } from "@chakra-ui/react";
import {Card, Image } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import ProductsList from "./productsList";
import { Link } from "react-router-dom";
import AddToCartButton from "../PublicCompontents/AddToCartButton";
const Products = () => {
  return (
    <>
      <MainHead head="PRODUCTS" />
      <Box marginBottom="50px" textAlign={{ base: "center", md: "start" }}>
        <Text
          cursor="pointer"
          display={{ base: "inline-block", md: "inline" }}
          color="white"
          backgroundColor="#6c14d0"
          padding={{ base: "10px", sm: "10px 20px", lg: "15px 30px" }}
          className="shadow-xl shadow-blue-500/50"
          _hover={{ color: "black", backgroundColor: "#a800b7" }}
          transition="0.5s"
          fontSize={{
            base: "13px",
            sm: "18px",
            md: "19px",
            lg: "18px",
            xl: "18px",
          }}
        >
          Show All Products
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }} gap="20px">
        {ProductsList.map((item) => (
          <Card.Root
            cursor="pointer"
            maxW="sm"
            overflow="hidden"
            key={item.id}
            backgroundColor="#f6f6f6"
            borderRadius="10px"
            border="5px solid #f6f6f6"
            className="shadow-xl shadow-blue-500/50"
            _hover={{ margin: "-20px 0 0 -20px" }}
            transition="0.3s"
          >
            <Link to={`/${item.href}${item.id}`}>
              <Image
                width={"100%"}
                src={item.productImg}
                alt="error"
                backgroundColor="#f6f6f6"
              />
            </Link>
            <Card.Body gap="2">
              <Card.Title fontSize={{ base: 17, sm: 18, lg: 20, xl: 20 }}>
                {item.pronductName}
              </Card.Title>
              <Card.Description fontSize={{ base: 14, sm: 15, lg: 15, xl: 16 }}>
                {item.productDescription}
              </Card.Description>
              <Text
                textStyle="2xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                {item.productPrice}
              </Text>
            </Card.Body>
            <Card.Footer gap="2">
              <AddToCartButton />
              <Box textAlign="end" width="100%">
                <IconButton
                  alignItems="center"
                  bg="inherit"
                  _hover={{ bg: "#f2e7fe" }}
                >
                  <FaHeart size={24} color="#7008e7" />
                </IconButton>
              </Box>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
