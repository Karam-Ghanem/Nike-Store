import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const AddToCartButton = () => {
  return (
    <>
      <Box
      width={"fit-content"}
        borderRadius="20px"
        backgroundColor="red"
        className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500"
      >
        <Button
          variant="ghost"
          transition="0.8s"
          _hover={{ backgroundColor: "#6c14d0", color: "white" }}
          fontSize={{ base: 12, sm: 14, lg: 15, xl: 16 }}
        >
          Add to cart
        </Button>
      </Box>
    </>
  );
};

export default AddToCartButton;
