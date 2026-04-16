import MainHead from "@/components/PublicCompontents/MainHead";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Button,
  Input,
  Heading,
  HStack,
  VStack,
  Separator,
  Card,
  Table,
  IconButton,
  Image,
} from "@chakra-ui/react";
import useCartStore from "@/Pages/Cart/cartStore";
import { Link } from "react-router-dom";
import { Toaster, toaster } from "@/components/ui/toaster";
import ColumnsHeader from "./CartData";
const Cart = () => {
  const { deleteProductFromCart, cartItems,setCurrentChoseQuantity } = useCartStore();
  
  if (cartItems.length < 1) {
    return <MainHead head="No Items To Show" />;
  }

  return (
    <>
      <Toaster />
      <MainHead head="Cart" />

      <Box px={{ base: 0, md: 0 }}>
        <Box
          maxW="1100px"
          minW={"40px"}
          mx="auto"
          bg="white"
          borderRadius="lg"
          boxShadow={{ base: "none", sm: "lg" }}
          p={{ base: 0, md: 8 }}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 1fr" }}
            gap={{ base: 4, md: 8 }}
            alignItems="flex-start"
          >
            {/* LEFT SIDE — PRODUCTS TABLE */}
            <GridItem>
              <Card.Root borderRadius="lg" overflow="hidden">
                {/* Scrollable table on mobile */}
                <Box overflowX="auto">
                  <Table.Root>
                    <Table.Header bg="#f6f6f6">
                      <Table.Row>
                        {ColumnsHeader.map((item) => (
                          <Table.ColumnHeader
                            key={item.label}
                            color="#7008e7"
                            fontSize={{ base: "7px", sm: "12px", md: "15px" }}
                          >
                            {item.label}
                          </Table.ColumnHeader>
                        ))}
                        <Table.ColumnHeader textAlign="center"></Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {cartItems.map((product) => (
                        <Table.Row key={product.product.id}>
                          <Table.Cell>
                            <Link
                              to={`/${product.product.href}${product.product.id}/${product.product.category}`}
                            >
                              <Image
                                width={{ base: 8, md: 10 }}
                                src={product?.product.productImg}
                              />
                            </Link>
                          </Table.Cell>

                          <Table.Cell>
                            <Text fontSize={{ base: "5px", md: "sm" }}>
                              {product.product.productName}
                            </Text>
                          </Table.Cell>

                          <Table.Cell fontSize={{ base: "xs", md: "sm" }}>
                            {product.product.productPrice}
                          </Table.Cell>

                          <Table.Cell fontSize={{ base: "xs", md: "sm" }}>
                            {product.currentShoseSize}
                          </Table.Cell>

                          <Table.Cell>
                            <Input
                              type="number"
                              value={product.currentShoseQuantity}
                              width={{ base: "55px", md: "70px" }}
                              size="sm"
                              borderRadius="full"
                              min={1}
                              fontSize="xs"
                              onChange={(e) =>
                                setCurrentChoseQuantity(
                                  product.currentShoeseID,
                                  parseInt(e.target.value)
                                )
                              }
                            />
                          </Table.Cell>

                          <Table.Cell textAlign="right" fontSize="xs">
                            {product.currentShoseQuantity *
                              parseFloat(product.product.productPrice)}{" "}
                            $
                          </Table.Cell>

                          <Table.Cell textAlign="center">
                            <IconButton
                              aria-label="Remove item"
                              variant="ghost"
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
                                fontSize="sm"
                                onClick={() => {
                                  deleteProductFromCart(
                                    product.product.id +
                                      product.currentShoseSize
                                  );
                                  toaster.create({
                                    title:
                                      "Product Deleted From your cart successfully!",
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
                </Box>
              </Card.Root>
            </GridItem>

            {/* RIGHT SIDE — TOTALS + COUPON */}
            <GridItem>
              <VStack align="stretch" gap={6}>
                {/* TOTALS CARD */}
                <Card.Root
                  border="1px solid #e2e2e2"
                  p={{ base: 4, md: 5 }}
                  bg="#fafafa"
                >
                  <Heading size={{ base: "sm", md: "md" }} mb={4}>
                    Cart Totals
                  </Heading>

                  <VStack align="stretch" gap={3}>
                    <Flex justify="space-between">
                      <Text
                        color="gray.600"
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        Subtotal
                      </Text>
                      <Text
                        fontWeight="semibold"
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        { cartItems.reduce(
                          (acc, item) =>
                            acc +
                            item.currentShoseQuantity *
                              parseFloat(item.product.productPrice),
                          0
                        )}{" "}
                        $
                      </Text>
                    </Flex>

                    <Flex justify="space-between">
                      <Text
                        color="gray.600"
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        others
                      </Text>
                      <Text
                        fontWeight="semibold"
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        0 $
                      </Text>
                    </Flex>

                    <Separator />

                    <Flex justify="space-between">
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        Total
                      </Text>
                      <Text
                        fontWeight="bold"
                        color="#7008e7"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {cartItems.reduce(
                          (acc, item) =>
                            acc +
                            item.currentShoseQuantity *
                              parseFloat(item.product.productPrice),
                          0
                        )}{" "}
                        $
                      </Text>
                    </Flex>
                  </VStack>

                  <Button
                    mt={6}
                    w="100%"
                    bg="#ba1e9a"
                    color="white"
                    borderRadius="full"
                    _hover={{ bg: "#7008e7" }}
                    size={{ base: "sm", md: "md" }}
                  >
                    <Link to={"/checkout"}>Check Out</Link>
                  </Button>
                </Card.Root>

                {/* COUPON CARD */}
                <Card.Root
                  border="1px solid #e2e2e2"
                  p={{ base: 4, md: 5 }}
                  bg="#fafafa"
                >
                  <Heading size="sm" mb={3}>
                    Apply Coupon
                  </Heading>

                  <Text fontSize="xs" color="gray.500" mb={3}>
                    Enter your coupon code if you have one.
                  </Text>

                  <HStack gap={3}>
                    <Input
                      placeholder="Coupon"
                      bg="white"
                      size="sm"
                      borderRadius="full"
                    />

                    <Button
                      bg="#ba1e9a"
                      color="white"
                      borderRadius="full"
                      px={6}
                      size="sm"
                      _hover={{ bg: "#7008e7" }}
                    >
                      APPLY
                    </Button>
                  </HStack>
                </Card.Root>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
