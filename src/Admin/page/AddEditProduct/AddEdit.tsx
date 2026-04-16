
import MainHead from "@/components/PublicCompontents/MainHead";
import { Box, Button, Menu, SimpleGrid, Portal, Text } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Field, Input } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";
import { Image } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { Checkbox } from "@chakra-ui/react";


import { type ChangeEvent } from "react";
import useProductAdmin from "@/Admin/Hooks/useProductAdmin";




interface Props{
  head:string;
}

const AddProduct = ({head}:Props) => {

  const {Sizes,addProduct,categories,currenntProductData,editProduct,genders,newProduct,setNewProduct,id} = useProductAdmin()

  return (
    <>
      <Toaster />
      <MainHead head={head} />
      <Box padding={4}>
        <form action="">
          <SimpleGrid columns={2} gap={20}>
            <Box>
              <Field.Root>
                <Input
                  value={newProduct.productName}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewProduct({
                      ...newProduct,
                      productName: e.target.value,
                    });
                  }}
                  required
                  marginBottom={4}
                  border={"1px solid #a800b7"}
                  placeholder="Product Name"
                />
                <Field.ErrorText></Field.ErrorText>
              </Field.Root>

              <Field.Root>
                <Input
                  required
                  value={newProduct.productPrice}
                  marginBottom={4}
                  border={"1px solid #a800b7"}
                  placeholder="Product Price"
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewProduct({
                      ...newProduct,
                      productPrice: e.target.value,
                    });
                  }}
                />
                <Field.ErrorText></Field.ErrorText>
              </Field.Root>

              <Field.Root>
                <label
                  style={{
                    width: "80%",
                    display: "inline",
                    padding: "10px",
                    marginBottom: "20px",
                    backgroundColor: "#facfeb",
                    color: "black",
                  }}
                  htmlFor="personal"
                >
                  Select Shoese Image ▼
                </label>
                {newProduct.productImg || id ? (
                  <Image
                    marginLeft={1}
                    style={{ display: "inline" }}
                    width="200px"
                    height="200px"
                    src={newProduct.productImg}
                    alt="error"
                  ></Image>
                ) : (
                  ""
                )}
                <Input
                  id="personal"
                  type="file"
                  border={"1px solid #a800b7"}
                  width={"20%"}
                  display={"none"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    const imageURL = URL.createObjectURL(file);

                    setNewProduct({ ...newProduct, productImg: imageURL });
                  }}
                />
              </Field.Root>
            </Box>
            <Box>
              <Field.Root>
                <Input
                  required
                  value={newProduct.quantity ||""}
                  marginBottom={4}
                  min={1}
                  type="number"
                  border={"1px solid #a800b7"}
                  placeholder="Quantity"
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewProduct({
                      ...newProduct,
                      quantity: parseInt(e.target.value),
                    });
                  }}
                />
                <Field.ErrorText></Field.ErrorText>
              </Field.Root>

              <Text>Sizes :</Text>
              <Box
                padding={2}
                marginTop={2}
                marginBottom={4}
                border={"1px solid #a800b7"}
              >
                {Sizes.map((size) => (
                  <Checkbox.Root
                    checked={newProduct.sizes.includes(size)}
                    onCheckedChange={() => {

                      if (!newProduct.sizes.includes(size)) {
                        setNewProduct({
                          ...newProduct,
                          sizes: [...newProduct.sizes, size],
                        });
                      }
                      else{
                            setNewProduct({
                              ...newProduct,
                              sizes: [...newProduct.sizes.filter((s)=>s!==size)]
                            });
                      }
                    }}
                    key={size}
                    margin={2}
                    variant={"subtle"}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{size}</Checkbox.Label>
                  </Checkbox.Root>
                ))}
              </Box>

              <Field.Root>
                <Textarea
                  required
                  value={newProduct.productDescription}
                  marginBottom={4}
                  placeholder="Product Description"
                  outline="1px solid #a800b7"
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    setNewProduct({
                      ...newProduct,
                      productDescription: target.value,
                    });
                  }}
                ></Textarea>
                <Field.ErrorText></Field.ErrorText>
              </Field.Root>
              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    color={"#777"}
                    border={"1px solid #a800b7"}
                    marginRight={4}
                  >
                    {id ? currenntProductData?.category : newProduct.category}
                  </Button>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      {categories.map((cat) => (
                        <Menu.Item
                          key={cat.value}
                          value={cat.value}
                          onClick={() => {
                            setNewProduct({
                              ...newProduct,
                              category: cat.value,
                            });
                          }}
                        >
                          {cat.label}
                        </Menu.Item>
                      ))}
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>

              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    color={"#777"}
                    border={"1px solid #a800b7"}
                  >
                    {id ? currenntProductData?.gender : newProduct.gender}
                  </Button>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      {genders.map((gender) => (
                        <Menu.Item
                          onClick={() => {
                            setNewProduct({
                              ...newProduct,
                              gender: gender.value,
                            });
                          }}
                          key={gender.value}
                          value="new-txt"
                        >
                          {gender.label}
                        </Menu.Item>
                      ))}
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </Box>
          </SimpleGrid>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setNewProduct({
                id: uuidv4(),
                category: "Category",
                gender: "Gender",
                productDescription: "",
                productPrice: "",
                productName: "",
                quantity: null,
                sizes: [],
                href: "product/",
                productImg: undefined,
              });
              if(id){
                editProduct(id,newProduct);
                 toaster.create({
                title: "One Shoese Edited  successfully!",
                type: "success",
                duration: 5000,
              });
              }
              else{
              addProduct(newProduct);
                 toaster.create({
                title: "One Shoese Added To Products successfully!",
                type: "success",
                duration: 5000,
              });

              }

            }}

            type="submit"
            bg={"#7008e7"}
            marginTop={4}
          >
            {head}
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddProduct;
