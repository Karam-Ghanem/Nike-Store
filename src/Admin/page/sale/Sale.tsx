import MainHead from "@/components/PublicCompontents/MainHead";
import {
  Box,
  Button,
  Field,
  HStack,
  Input,
  Menu,
  Portal,
  Span,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Categories from "@/components/Products/Products Data/ProductCategories";
import Genders from "@/components/Products/Products Data/ProductsGender";
import useProductStore from "@/components/Products/ProductStore";
import { Toaster,toaster } from "@/components/ui/toaster";
import { useParams } from "react-router-dom";
const Sale = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedPercentage, setSelectedPercentage] = useState(1);
  const {products} = useProductStore()
  const {id} = useParams()
  const shoeseName =id? products.find(prod=>prod.id==id)?.productName : ''
  

  const {applyDiscount,applyDiscountOnShoese} = useProductStore()
  const categoriesAndGenders = [
    ...Categories,
    ...Genders.filter((gender) => gender.label != "All"),
  ];

  console.log(categoriesAndGenders);
  return (
    <Box>
      <Toaster />
      <Box marginTop={-10}>
        <MainHead head="Sales" />
      </Box>


        {!id && (
          <Menu.Root>
            <Menu.Trigger asChild width={"50%"} marginBottom={10}>
              <Button
                variant="outline"
                size="sm"
                bg={"#a800b7"}
                fontSize={"18px"}
              >
                {selectedType == ""
                  ? "Choose the type of products you want to apply the discount to ▼"
                  : selectedType}
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner width={"50%"}>
                <Menu.Content>
                  {categoriesAndGenders.map((catgen) => (
                    <Menu.Item
                      onClick={() => {
                        setSelectedType(catgen.label);
                      }}
                      key={catgen.value}
                      value="new-txt"
                    >
                      {catgen.label}
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        )}
      <Field.Root>
        <HStack width={"40%"} marginBottom={20}>
          <Field.Label>Make percentage discounts</Field.Label>
          <Input
            type="number"
            min={1}
            max={100}
            value={selectedPercentage}
            width={"15%"}
            onChange={(e) => {
              setSelectedPercentage(parseInt(e.target.value));
            }}
            border={"1px solid #a800b7"}
            placeholder="%"
          />
          %
        </HStack>
        {selectedPercentage > 100 && (
          <Text color={"red"} marginTop={-20}>
            Please Enter Number Beteween 1 And 100
          </Text>
        )}
      </Field.Root>

      <Box border={"1px solid #a800b7"} padding={4} justifyContent={"center"}>
        <Text marginBottom={10} fontSize={30}>
          Apply
          <Span color={"#7008e7"}>
            {selectedPercentage == 1 || isNaN(selectedPercentage)
              ? "......"
              : selectedPercentage}
            %
          </Span>
          {!id && (
            <Box>
              discount on
              <Span>{selectedType == "" ? "...... " : selectedType + "'"}</Span>
              s products
            </Box>
          )}
          {id && (
            <Span>
              discount on
              <Span fontWeight={"bold"} color={"#7008e7"}>
                {`"${shoeseName}"`}
              </Span>
            </Span>
          )}
        </Text>

        <HStack
          display={
            id && selectedPercentage > 1 && selectedPercentage <= 100
              ? "inline"
              : selectedPercentage <= 1 ||
                isNaN(selectedPercentage) ||
                selectedType == ""
              ? "none"
              : "inline"
          }
        >
          <Button
            marginRight={4}
            bg={"#7008e7"}
            onClick={() => {
              if (id) {
                applyDiscountOnShoese(id, selectedPercentage);
              } else {
                applyDiscount(selectedType, selectedPercentage);
                setSelectedType("");
              }
              setSelectedPercentage(0);
              toaster.create({
                title: `A ${selectedPercentage} % discount has been applied to ${selectedType}'s shoes.`,
                type: "success",
                duration: 5000,
              });
            }}
          >
            Ok
          </Button>
          <Button
            onClick={() => {
              setSelectedPercentage(0);
              setSelectedType("");
            }}
            bg={"red"}
          >
            Cancel
          </Button>
        </HStack>
      </Box>



    </Box>
  );
};

export default Sale;
