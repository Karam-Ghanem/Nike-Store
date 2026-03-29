import { Span } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import useCartStore from "../Cart/cartStore";

const CheckOutTable = () => {
      const { cartItems } = useCartStore();

  return (
    <Table.Root size="sm" variant="outline">
      <Table.ColumnGroup>
        <Table.Column />
        <Table.Column />
        <Table.Column />
      </Table.ColumnGroup>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Order</Table.ColumnHeader>
          <Table.ColumnHeader>Price</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {cartItems.map((item) => (
          <Table.Row key={item.product.id}>
            <Table.Cell>
              {item.product.productName} <Span color="#a800b7">({item.product.quantity})</Span>
            </Table.Cell>
            <Table.Cell>{item.product.productPrice}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer height={"70px"} fontSize={20} bg={"#f3f1f1"}>
        <Table.Row>
          <Table.Cell>Total</Table.Cell>
          <Table.Cell>
            {cartItems.reduce(
              (acc, item) =>
                acc + item.product.quantity * parseFloat(item.product.productPrice),
              0
            )}
            $
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>
  );
};

export default CheckOutTable;
