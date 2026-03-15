import { Box, Flex, HStack, Input, Span } from "@chakra-ui/react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import useProductStore from "./ProductStore";
import { useState } from "react";

export interface Query {
  selectedCategory: string;
  selectedGender: string;
}

interface Props{
  isAnimating:(animate:boolean)=>void,
}

const ProductControls = ({isAnimating}:Props) => {
  const Categories = [
    { label: "All", value: "" },
    { label: "Lifestyle", value: "Lifestyle" },
    { label: "Running", value: "Running" },
    { label: "Basketball", value: "Basketball" },
    { label: "Training/Gym", value: "Training/Gym" },
    { label: "Football/Soccer", value: "Football/Soccer" },
    { label: "Skateboarding", value: "Skateboarding" },
    { label: "Tennis", value: "Tennis" },
  ];
  const Genders = [
    { label: "All", value: "" },
    { label: "Men", value: "Men" },
    { label: "Wommen", value: "Wommen" },
    { label: "Kids", value: "Kids" },
  ];

  const { Filteration ,Searching} =
    useProductStore();

  const [query, setQuery] = useState<Query>({
    selectedCategory: "",
    selectedGender: "",
  });

  const [selectedCategory, setSelectedCategry] = useState("");
  const [selectedGender, setSelectedGender] = useState("");


  const [searchText, setSearchText] = useState("");
console.log("selectedCategory  :: "+ selectedCategory)
console.log("selectedGender  :" + setSelectedGender)


  return (
    <>
      <Flex justifyContent={"center"}>
        <HStack
          width={"70%"}
          padding={2}
          className="bg-linear-65 from-purple-200 to-pink-200 shadow-xl shadow-blue-500/50"
          justifyContent={"space-between"}
        >
          {/* Filter */}
          <HStack justifyContent={"space-around"}>
            <Box
              marginRight={10}
              className="bg-linear-30 from-purple-50 to-pink-200"
            >
              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    color={selectedCategory ? "#a800b7" : "#333"}
                  >
                    {selectedCategory ? selectedCategory : "Category ▼"}
                  </Button>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      {Categories.map((cat) => (
                        <Menu.Item
                          key={cat.value}
                          value={cat.value}
                          onClick={() => {
                            
                            isAnimating(true);
                                                          setSelectedCategry(
                                                            cat.value
                                                          );
                                                          setSelectedGender(
                                                            selectedGender
                                                          );

                            setTimeout(() => {

                              setQuery(() => ({
                                ...query,
                                selectedCategory: cat.value,
                              }));

                              Filteration({
                                selectedCategory: cat.value,
                                selectedGender,
                              });

                              isAnimating(false);
                            }, 800);
                          }}
                        >
                          {cat.label}
                        </Menu.Item>
                      ))}
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </Box>
            <Box className="bg-linear-30 from-purple-50 to-pink-200">
              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    color={selectedGender ? "#a800b7" : "#333"}
                  >
                    {selectedGender ? selectedGender : "Gender ▼"}
                  </Button>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      {Genders.map((gender) => (
                        <Menu.Item
                          key={gender.value}
                          value={gender.value}
                          onClick={() => {
                            isAnimating(true);

                            setTimeout(() => {
                              setSelectedGender(gender.value);
                              setSelectedCategry(selectedCategory)

                              setQuery(() => ({
                                ...query,
                                selectedGender: gender.value,
                              }));

                              Filteration({
                                selectedCategory,
                                selectedGender: gender.value,
                              });

                              isAnimating(false);
                            }, 800); 
                          }}
                        >
                          {gender.label}
                        </Menu.Item>
                      ))}
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </Box>
          </HStack>








          {/* Search */}
          <HStack
            width={"40%"}
            position={"relative"}
            className="bg-linear-30 from-purple-50 to-pink-200"
          >
            <Input
              type="search"
              _focus={{ outline: "1px solid #7008e7" }}
              placeholder="Search"
              onChange={(e)=>setSearchText(e.target.value)}
              onKeyDown={
                (e)=>{

                  if(e.key==="Enter"){
                    isAnimating(true);
                    setTimeout(()=>{
                    Searching(searchText);
                    setSelectedCategry("");
                    setSelectedGender("");
                    isAnimating(false);
                    
                    },800) 
                                       
                  }

                }
              }
            ></Input>
            <Span position={"absolute"} right={0}>
              <FiSearch size={30} color="#7008e7" />
            </Span>
          </HStack>
          

        </HStack>




      </Flex>
    </>
  );
};

export default ProductControls;
