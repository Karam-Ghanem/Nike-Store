import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import type { Product } from "../Products/Products Data/productsList";
import { Toaster, toaster } from "@/components/ui/toaster";
import useCartStore from "@/Pages/Cart/cartStore";
interface Props {
  product?: Product;
  currentShoeseSize: string;
  isSelectSize: boolean;
  currentShoeseID:string;
}
const AddToCartButton = ({ product,currentShoeseSize,currentShoeseID,isSelectSize }: Props) => {
  const { addProductToCart, cartItems } = useCartStore();

  return (
    <>
      <Box
        textAlign="center"
        width={"fit-content"}
        borderRadius="20px"
        className={
          !cartItems
            .map((item) => item.currentShoeseID)
            .includes(currentShoeseID)
            ? "bg-linear-to-r from-purple-400 via-pink-500 to-red-500"
            : "bg-green-600 "
        }
      >
        <Toaster />
        <Button
          disabled={isSelectSize}
          color={'white'}
          cursor={
            // !cartItems.map((item) => item.product.id).includes(product!.id)
            !cartItems
              .map((item) => item.currentShoeseID)
              .includes(currentShoeseID)
              ? "pointer"
              : "menuitem"
          }
          onClick={() => {
            // if (!cartItems.map((item) => item.product.id).includes(product!.id)) {
            if (
              !cartItems
                .map((item) => item.currentShoeseID)
                .includes(currentShoeseID)
            ) {
              addProductToCart(product!, currentShoeseSize, currentShoeseID);
              toaster.create({
                title: "Product added to your cart successfully!",
                type: "success",
                duration: 5000,
              });
            }
          }}
          variant="ghost"
          transition="0.8s"
          _hover={
            // !cartItems.map((item) => item.product.id).includes(product!.id)

            !cartItems
              .map((item) => item.currentShoeseID)
              .includes(currentShoeseID)
              ? { backgroundColor: "#16a34a", color: "white" }
              : { backgroundColor: "#16a34a", color: "white", borderRadius:"20px" }
          }
          fontSize={{ base: 12, sm: 14, lg: 15, xl: 16 }}
        >
          {/* Add to cart */}
          {/* {cartItems.map((item) => item.product.id).includes(product!.id) */}
          {cartItems
            .map((item) => item.currentShoeseID)
            .includes(currentShoeseID)
            ? "Added"
            : "Add To Cart"}
          {/* {currentShoeseID} */}
        </Button>
      </Box>
    </>
  );
};

export default AddToCartButton;








