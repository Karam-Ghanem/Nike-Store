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
  Button,
  Popover,
  Portal,
} from "@chakra-ui/react";
import { Alert } from "@chakra-ui/react";
import MainDialog from "@/Admin/components/MainDialog";
import useMyPurchase from "./Hook/useMyPrchase";


const MyPurchases = () => {

const {myPurchases,openAlert,purchaseDate,returnPeriod,returnProduct,setOpenAlert} = useMyPurchase()

  if (myPurchases.length < 1) {
    return <MainHead head="No Products To Show" />;
  }

  return (
    <>
      <MainHead head="MY PURCHASES" />
      <Box margin={4}>
        {openAlert && (
          <Alert.Root status="error" title="This is the alert title">
            <Alert.Indicator />
            <Alert.Title>
              There was an error processing your request
            </Alert.Title>
          </Alert.Root>
        )}
      </Box>
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
                      Purchase Date
                    </Table.ColumnHeader>

                    <Table.ColumnHeader
                      textAlign="center"
                      color="#7008e7"
                      fontSize={20}
                    >
                      Return Shoes
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {myPurchases.map((product) => (
                    <Table.Row key={product.product.id}>
                      {/* IMAGE */}
                      <Table.Cell>
                        <Popover.Root>
                          <Popover.Trigger asChild>
                            <Button
                              size="sm"
                              variant="solid"
                              bg="transparent"
                              _hover={{ bg: "transparent" }}
                            >
                              <Image
                                width={"10"}
                                src={product.product.productImg}
                              />
                            </Button>
                          </Popover.Trigger>

                          <Portal>
                            <Popover.Positioner>
                              <Popover.Content>
                                <Popover.Arrow />
                                <Popover.Body>
                                  <Image
                                    width={"100%"}
                                    src={product.product.productImg}
                                  />
                                </Popover.Body>
                              </Popover.Content>
                            </Popover.Positioner>
                          </Portal>
                        </Popover.Root>
                      </Table.Cell>

                      {/* NAME */}
                      <Table.Cell>
                        <Text>{product.product.productName}</Text>
                      </Table.Cell>

                      {/* PRICE */}
                      <Table.Cell>
                        <Text>{product.product.productPrice}</Text>
                      </Table.Cell>

                      <Table.Cell>
                        <Flex justify="center">{`${purchaseDate.getDate()}-${
                          purchaseDate.getMonth() + 1
                        }-${purchaseDate.getFullYear()}`}</Flex>
                      </Table.Cell>

                      <Table.Cell textAlign="center">
                        <IconButton
                          aria-label="Return item"
                          variant="ghost"
                          size="sm"
                        >
                          <MainDialog
                          id={product.product.id}
                            parameter={product.currentShoeseID}
                            completeTheProcess={(pro) => returnProduct(pro)}
                            theProces={"Return"}
                          >
                            <Button
                              onMouseOver={()=>
                                purchaseDate.getTime() / 1000 > returnPeriod
                                  ? setOpenAlert(true)
                                  : setOpenAlert(false)
                              }
                              title={
                                (new Date().getTime() -
                                  purchaseDate.getTime()) /
                                  1000 >
                                returnPeriod
                                  ? "Sorry"
                                  : ""
                              }
                              disabled={
                                (new Date().getTime() -
                                  purchaseDate.getTime()) /
                                  1000 >
                                returnPeriod
                                  ? true
                                  : false
                              }
                              fontSize={16}
                              bg={"#7008e7"}
                              _hover={{
                                backgroundColor: "#E53935",
                                color: "#333",
                              }}
                            >
                              Return
                            </Button>
                          </MainDialog>
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

export default MyPurchases;
