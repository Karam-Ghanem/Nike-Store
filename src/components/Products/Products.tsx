import { Box, IconButton, Text } from "@chakra-ui/react";
import MainHead from "../PublicCompontents/MainHead";
import { SimpleGrid } from "@chakra-ui/react";
import { Button, Card, Image } from "@chakra-ui/react";
import shoese1 from "@/assets/shoese/_3.jpeg";
import { FaHeart } from "react-icons/fa";
const Products = () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
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
          fontSize={"20px"}
        >
          Show All Products
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }} gap="20px">
        {a.map((item) => (
          <Card.Root
            cursor="pointer"
            maxW="sm"
            overflow="hidden"
            key={item}
            backgroundColor="#f6f6f6"
            borderRadius="10px"
            border="5px solid #f6f6f6"
            className="shadow-xl shadow-blue-500/50"
            _hover={{ margin: "-20px 0 0 -20px" }}
            transition="0.3s"
          >
            <Image src={shoese1} alt="error" backgroundColor="#f6f6f6" />
            <Card.Body gap="2">
              <Card.Title fontSize={{ base: 17, sm: 18, lg: 20, xl: 20 }}>
                Living room Sofa
              </Card.Title>
              <Card.Description fontSize={{ base: 14, sm: 15, lg: 15, xl: 16 }}>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces.
              </Card.Description>
              <Text
                textStyle="2xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                $450
              </Text>
            </Card.Body>
            <Card.Footer gap="2">
              <Box
                borderRadius="20px"
                backgroundColor="red"
                className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500"
              >
                <Button
                  variant="ghost"
                  transition="0.8s"
                  _hover={{ backgroundColor: "#6c14d0", color: "white" }}
                  fontSize={{ base: 14, sm: 15, lg: 18, xl: 20 }}
                >
                  Add to cart
                </Button>
              </Box>
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
