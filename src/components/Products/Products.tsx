import { Box, IconButton, Text } from "@chakra-ui/react";
import MainHead from "../PublicCompontents/MainHead";
import { SimpleGrid } from "@chakra-ui/react";
import {Card, Image } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import ProductsList from "./productsList";
import { Link } from "react-router-dom";
import AddToCartButton from "../PublicCompontents/AddToCartButton";
import { Toaster, toaster } from "@/components/ui/toaster";
import useFavoriteStore from "@/Pages/Favorites/FavoritesStore";
import { useState } from "react";

interface Props {
  homePage: boolean;
}
const Products = ({ homePage }: Props) => {
  const actualProductList = homePage ? ProductsList.slice(0, 4) : ProductsList;

  const { addProductToFavList, favoritesItems, deleteProductFromFav } =useFavoriteStore();

  const [favItems,setFavItems] = useState(favoritesItems.map((item) => item.id))

  return (
    <>
      <MainHead head="PRODUCTS" />
      <Box marginBottom="50px" textAlign={{ base: "center", md: "start" }}>
        {homePage && (
          <Link to={"/products"}>
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
          </Link>
        )}
      </Box>

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 3, lg: 3, xl: 4 }}
        gap="10px"
      >
        {actualProductList.map((item) => (
          <Card.Root
            height={570}
            scale={0.9}
            cursor="pointer"
            maxW="sm"
            overflow="hidden"
            key={item.id}
            backgroundColor={favItems.includes(item.id) ? "pink" : "#f6f6f6"}
            borderRadius="10px"
            border={`5px solid ${
              favItems.includes(item.id) ? "pink" : "#f6f6f6"
            }`}
            className="shadow-xl shadow-blue-500/50"
            _hover={{ margin: "-10px 0 0 -10px" }}
            transition="0.3s"
          >
            <Link
              to={`/${item.href}${item.id}/${item.category}`}            >
              <Image
                padding={1}
                width={"100%"}
                height={"300px"}
                src={item.productImg}
                alt="error"
                backgroundColor="#f6f6f6"
              />
            </Link>
            <Card.Body gap="1">
              <Card.Title fontSize={{ base: 17, sm: 18, lg: 20, xl: 20 }}>
                {item.productName}
              </Card.Title>
              <Card.Description fontSize={{ base: 14, sm: 15, lg: 15, xl: 16 }}>
                {item.productDescription}
              </Card.Description>
              <Text
                textStyle="2xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="4"
              >
                {item.productPrice}
              </Text>
            </Card.Body>
            <Card.Footer gap="0">
              <AddToCartButton product={item} />
              <Box textAlign="end" width="100%">
                <IconButton
                  alignItems="center"
                  bg="inherit"
                  _hover={{ bg: "#f2e7fe" }}
                >
                  <Toaster />
                  <FaHeart
                    size={24}
                    color="#7008e7"
                    onClick={() => {
                      if (!favItems.includes(item.id)) {
                        addProductToFavList(item);
                        setFavItems([...favItems,item.id])
                      } else {
                        deleteProductFromFav(item.id);
                        const  newFavItem = favItems.filter(i=>i!=item.id)
                        setFavItems(newFavItem);
                      }
                      toaster.create({
                        title: `Item ${favItems.includes(item.id) ? "deleted from" : "added to"}  your Favourite successfully!`,
                        type: "success",
                        duration: 5000,
                      });
                    }}
                  />
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
