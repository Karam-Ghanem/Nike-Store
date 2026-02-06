import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import type { Product } from "../Products/productsList";
import { Toaster, toaster } from "@/components/ui/toaster";
import useCartStore from "@/Pages/Cart/cartStore";
interface Props {
  product?: Product;
}
const AddToCartButton = ({ product }: Props) => {
  const { addProductToCart, cartItems } = useCartStore();

  return (
    <>
      <Box
        textAlign="center"
        width={"fit-content"}
        borderRadius="20px"



        className={
          !cartItems.map((item) => item.id).includes(product!.id)
            ? "bg-linear-to-r from-purple-400 via-pink-500 to-red-500"
            : "bg-green-600 "
        }
      >
        <Toaster />
        <Button
          cursor={!cartItems.map((item) => item.id).includes(product!.id)? "pointer" : "disabled"}
          onClick={() => {
            if (!cartItems.map((item) => item.id).includes(product!.id)) {
              addProductToCart(product!);
              toaster.create({
                title: "Item added to your cart successfully!",
                type: "success",
                duration: 5000,
              });
            }
          }}
          variant="ghost"
          transition="0.8s"
          _hover={
            !cartItems.map((item) => item.id).includes(product!.id)
              ? { backgroundColor: "#6c14d0", color: "white" }
              : {}
          }
          fontSize={{ base: 12, sm: 14, lg: 15, xl: 16 }}
        >
          {/* Add to cart */}
          {cartItems.map((item) => item.id).includes(product!.id)
            ? "Added"
            : "Add To Cart"}
        </Button>
      </Box>
    </>
  );
};

export default AddToCartButton;
