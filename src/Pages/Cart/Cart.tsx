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

const Cart = () => {
  const { deleteProductFromCart, cartItems, setCartItems } = useCartStore();

  if (cartItems.length < 1) {
    
    return <MainHead head="No Items To Show" /> ;
  }

  return (
    <>
      <Toaster />
      <MainHead head="Cart" />
      <Box>
        <Box
          maxW="1100px"
          mx="auto"
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          p={8}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 1fr" }}
            gap={8}
            alignItems="flex-start"
          >
            {/* LEFT SIDE — PRODUCTS TABLE */}
            <GridItem>
              <Card.Root borderRadius="lg" overflow="hidden">
                <Table.Root>
                  <Table.Header bg="#f6f6f6">
                    <Table.Row>
                      <Table.ColumnHeader color="#7008e7">
                        Product Image
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color="#7008e7">
                        Product
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color="#7008e7">
                        Price
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color="#7008e7">
                        Quantity
                      </Table.ColumnHeader>
                      <Table.ColumnHeader textAlign="right" color="#7008e7">
                        Total
                      </Table.ColumnHeader>
                      <Table.ColumnHeader textAlign="center">
                        {/* X column */}
                      </Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {/* PRODUCT ROW */}
                    {cartItems.map((product) => (
                      <Table.Row key={product.id}>
                        <Table.Cell>
                          <Link
                            to={`/${product.href}${product.id}/${product.category}`}
                          >
                            <Image width={10} src={product?.productImg} />
                          </Link>
                        </Table.Cell>
                        <Table.Cell>
                          <Text>{product.productName}</Text>
                        </Table.Cell>
                        <Table.Cell>{product.productPrice}</Table.Cell>
                        <Table.Cell>
                          <Input
                            type="number"
                            defaultValue={1}
                            width="70px"
                            size="sm"
                            borderRadius="full"
                            min={1}
                            onChange={(e) => {
                              e.target.value =
                                Number(e.target.value) < 1
                                  ? (Number(e.target.value) * -1).toString()
                                  : e.target.value;
                              setCartItems(product.id, Number(e.target.value));
                            }}
                          />
                        </Table.Cell>
                        <Table.Cell textAlign="right">
                          {product.quantity * parseFloat(product.productPrice)}{" "}
                          $
                        </Table.Cell>
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
                                deleteProductFromCart(product.id);
                                toaster.create({
                                  title:
                                    "Item Deleted From your cart successfully!",
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

            {/* RIGHT SIDE — TOTALS + COUPON */}
            <GridItem>
              <VStack align="stretch" gap={6}>
                {/* TOTALS CARD */}
                <Card.Root border="1px solid #e2e2e2" p={5} bg="#fafafa">
                  <Heading size="md" mb={4}>
                    Cart Totals
                  </Heading>
                  <VStack align="stretch" gap={3}>
                    <Flex justify="space-between">
                      <Text color="gray.600">Subtotal</Text>
                      <Text fontWeight="semibold">
                        {cartItems.reduce(
                          (acc, item) =>
                            acc + item.quantity * parseFloat(item.productPrice),
                          0
                        )}{" "}
                        $
                      </Text>
                    </Flex>
                    <Flex justify="space-between">
                      <Text color="gray.600">Shipping</Text>
                      <Text fontWeight="semibold">45 $</Text>
                    </Flex>

                    <Separator />

                    <Flex justify="space-between">
                      <Text fontWeight="bold">Total</Text>
                      <Text fontWeight="bold" color="#7008e7">
                        {cartItems.reduce(
                          (acc, item) =>
                            acc + item.quantity * parseFloat(item.productPrice),
                          0
                        ) + 45}{" "}
                        $
                      </Text>
                    </Flex>
                  </VStack>

                  <HStack mt={6} gap={4}>
                    <Button
                      flex={1}
                      bg="#ba1e9a"
                      color="white"
                      borderRadius="full"
                      _hover={{ bg: "#7008e7" }}
                    >
                      Update Cart
                    </Button>

                    <Button
                      flex={1}
                      bg="#ba1e9a"
                      color="white"
                      borderRadius="full"
                      _hover={{ bg: "#7008e7" }}
                    >
                      Check Out
                    </Button>
                  </HStack>
                </Card.Root>

                {/* COUPON CARD */}
                <Card.Root border="1px solid #e2e2e2" p={5} bg="#fafafa">
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
