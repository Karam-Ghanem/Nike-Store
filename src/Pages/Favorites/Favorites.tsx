import MainHead from "@/components/PublicCompontents/MainHead";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Card,
  Table,
  IconButton,
  Image,
  Flex,
} from "@chakra-ui/react";
import AddToCartButton from "@/components/PublicCompontents/AddToCartButton";
import { Link } from "react-router-dom";
import useFavoriteStore from "./FavoritesStore";
import { Toaster, toaster } from "@/components/ui/toaster";


const Favorites = () => {
  const { deleteProductFromFav, favoritesItems } = useFavoriteStore();

  if (favoritesItems.length < 1) {
    return <MainHead head="No Items To Show" />;
  }

  return (
    <>
      <Toaster />
      <MainHead head="Favorites" />
      <Box maxW="1100px" mx="auto" bg="white">
        <Grid templateColumns="1fr" gap={8}>
          <GridItem>
            <Card.Root borderRadius="lg" overflow="hidden">
              <Table.Root>
                <Table.Header bg="#f6f6f6">
                  <Table.Row>
                    <Table.ColumnHeader color="#7008e7" fontSize={20}>
                      Product Image
                    </Table.ColumnHeader>

                    <Table.ColumnHeader color="#7008e7" fontSize={20}>
                      Product
                    </Table.ColumnHeader>

                    <Table.ColumnHeader color="#7008e7" fontSize={20}>
                      Price
                    </Table.ColumnHeader>

                    <Table.ColumnHeader
                      textAlign="center"
                      color="#7008e7"
                      fontSize={20}
                    >
                      Add to Cart
                    </Table.ColumnHeader>

                    <Table.ColumnHeader textAlign="center" color="#7008e7">
                      Remove
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {favoritesItems.map((product) => (
                    <Table.Row key={product.id}>
                      {/* IMAGE */}
                      <Table.Cell>
                        <Link
                          to={`/${product.href}${product.id}/${product.category}`}
                        >
                          <Image width={10} src={product.productImg} />
                        </Link>
                      </Table.Cell>

                      {/* NAME */}
                      <Table.Cell>
                        <Text>{product.productName}</Text>
                      </Table.Cell>

                      {/* PRICE */}
                      <Table.Cell>
                        <Text>{product.productPrice}</Text>
                      </Table.Cell>

                      {/* ADD TO CART */}
                      <Table.Cell>
                        <Flex justify="center">
                          <AddToCartButton product={product} />
                        </Flex>
                      </Table.Cell>

                      {/* REMOVE (X) */}
                      <Table.Cell textAlign="center">
                        <IconButton
                          aria-label="Remove item"
                          variant="ghost"
                          size="sm"
                        >
                          <Text
                            _hover={{
                              bg: "red",
                              color: "white",
                              border: "none",
                            }}
                            transition={"0.3s"}
                            paddingX={2}
                            border={"1px solid #333"}
                            onClick={() => {
                              deleteProductFromFav(product.id);
                              toaster.create({
                                title:
                                  "Item Deleted From your Favorites successfully!",
                                type: "success",
                                duration: 5000,
                              });
                            }}
                          >
                            X
                          </Text>
                        </IconButton>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Card.Root>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Favorites;
