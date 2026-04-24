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
import { Link } from "react-router-dom";
import useProductStore from "@/components/Products/ProductStore";
import MainDialog from "@/Admin/components/MainDialog";

const Archive = () => {

    const {archivedProducts,removeFromArchive} = useProductStore();

    console.log(archivedProducts.map(a=>a.product.id))
  if (archivedProducts.length < 1) {
    return <MainHead head="No Products To Show" />;
  }

  return (
    <>
      <MainHead head="Archive" />
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
                    <Table.ColumnHeader color="#7008e7" fontSize={20}>
                      Archive Date
                    </Table.ColumnHeader>

                    <Table.ColumnHeader
                      textAlign="center"
                      color="#7008e7"
                      fontSize={20}
                    >
                      More Information
                    </Table.ColumnHeader>

                    <Table.ColumnHeader textAlign="center" color="#7008e7">
                      UnArchived
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {archivedProducts.map((product) => (
                    <Table.Row key={product.product.id}>
                      {/* IMAGE */}
                      <Table.Cell>
                        <Link
                          to={`/${product.product.href}${product.product.id}/${product.product.category}`}
                        >
                          <Image width={10} src={product.product.productImg} />
                        </Link>
                      </Table.Cell>

                      {/* NAME */}
                      <Table.Cell>
                        <Text>{product.product.productName}</Text>
                      </Table.Cell>

                      {/* PRICE */}
                      <Table.Cell>
                        <Text>{product.product.productPrice}</Text>
                      </Table.Cell>

                      {/* ARCHIVE */}
                      <Table.Cell>
                        <Text>
                          {product.date.getDate() +
                            "/" +
                            (product.date.getMonth() + 1) +
                            "/" +
                            product.date.getFullYear()}
                        </Text>
                      </Table.Cell>

                      {/* ADD TO CART */}
                      <Table.Cell>
                        {/* <PurchaseProcess item={product} /> */}
                        <Flex color="#a800b7" justifyContent={"center"}>
                          <Link
                            to={`${product.product.id}/${product.product.category}`}
                          >
                            More
                          </Link>
                        </Flex>
                      </Table.Cell>

                      {/* REMOVE (X) */}
                      <Table.Cell textAlign="center">
                        <IconButton
                          aria-label="Remove item"
                          variant="ghost"
                          size="sm"
                        >
                          <MainDialog 
                          id={product.product.id}
                        completeTheProcess={(id)=>removeFromArchive(id)}
                         parameter={product.product.id} 
                         theProces="Remove From Archive"
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
                            >
                              X
                            </Text>
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

export default Archive;
