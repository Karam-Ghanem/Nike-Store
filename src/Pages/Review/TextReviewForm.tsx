import { useState, type ChangeEvent } from "react";
import useReviewStore from "./reviewStore";
import {
  Box,
  Button,
  Field,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Textarea } from "@chakra-ui/react";
import { type ReviewType } from "./Review";
import { Toaster, toaster } from "@/components/ui/toaster";


const TextReviewForm = () => {
  const { AddReview } = useReviewStore();

  const [selectedIDImg, setSelectedIDImage] = useState("");
  const [openForm,setOpenForm] = useState(false);
  const [selectedPersonalImg, setSelectedPersonalImage] = useState<
    string | undefined
  >(undefined);

  const [singleReview, setSingleReview] = useState<ReviewType>({
    name: "",
    img: "",
    description: "",
  });
  
  const HandleIDImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setSelectedIDImage(imageURL);
  };

  const HandlePersonalImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setSelectedPersonalImage(imageURL);

    setSingleReview({
      ...singleReview,
      img: imageURL,
    });
  };
  return (
    <Box>
      <Toaster />
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} gap={"40px"}>
        <Box>
          <Text marginBottom={10} color={"#7008e7"} fontSize={25}>
            To submit your comment, please provide a photo of your personal ID :
          </Text>
          <form action="">
            <label
              className=" cursor-pointer bg-linear-65 from-purple-200 to-pink-200  "
              style={{
                width: "80%",
                display: "inline-block",
                padding: "10px",
                marginBottom: "20px",
              }}
              htmlFor="ID"
            >
              Select Your ID ▼
            </label>
            {selectedIDImg ? (
              <Image
                marginLeft={1}
                border={"5px solid #facfeb"}
                style={{ display: "inline-block" }}
                width="60px"
                height="60px"
                src={selectedIDImg}
              ></Image>
            ) : (
              ""
            )}
            <Input
              id="ID"
              type="file"
              border={"1px solid #a800b7"}
              width={"20%"}
              display={"none"}
              onChange={HandleIDImg}
            />

            <br />
            <Input
              type="submit"
              bg="#a353e9"
              color="white"
              width="100px"
              cursor="pointer"
              value="Submit"
              fontSize={17}
              disabled={selectedIDImg ? false : true}
              onClick={(e)=>{e.preventDefault();setOpenForm(true);}}
            />
          </form>
        </Box>
        {openForm && (
          <Box>
            <form action="">
              <Stack gap="4" align="flex-start" maxW="xl">
                <Field.Root>
                  <Input
                    border={"1px solid #a800b7"}
                    placeholder="Name"
                    value={singleReview.name}
                    onChange={(e) => {
                      setSingleReview({
                        name: e.target.value,
                        img: singleReview.img,
                        description: singleReview.description,
                      });
                    }}
                  />
                  <Field.ErrorText></Field.ErrorText>
                </Field.Root>

                <Field.Root>
                  <Textarea
                    value={singleReview.description}
                    onChange={(e) => {
                      setSingleReview({
                        name: singleReview.name,
                        img: singleReview.img,
                        description: e.target.value,
                      });
                    }}
                    placeholder="Your Comment"
                    outline="1px solid #a800b7"
                  ></Textarea>
                  <Field.ErrorText></Field.ErrorText>
                </Field.Root>

                <Field.Root>
                  <label
                    className=" cursor-pointer bg-linear-65 from-purple-200 to-pink-200  "
                    style={{
                      width: "80%",
                      display: "inline",
                      padding: "10px",
                      marginBottom: "20px",
                    }}
                    htmlFor="personal"
                  >
                    Select Your Image ▼
                  </label>
                  {selectedPersonalImg ? (
                    <Image
                      marginLeft={1}
                      border={"5px solid #facfeb"}
                      style={{ display: "inline" }}
                      width="60px"
                      height="60px"
                      borderRadius={40}
                      src={selectedPersonalImg}
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
                    onChange={(e) => {
                      HandlePersonalImg(e);
                    }}
                  />
                </Field.Root>
              </Stack>
              <Button
              disabled={singleReview.description &&singleReview.name && singleReview.img ? false : true}
                marginTop={4}
                bg="#a353e9"
                onClick={() => {
                  AddReview(singleReview);
                  setSingleReview({
                    name: "",
                    img: undefined,
                    description: "",
                  });
                  setSelectedPersonalImage(undefined)
                  setSelectedIDImage("")
                  toaster.create({
                    title: "One Comment Added ",
                    type: "success",
                    duration: 5000,
                  });
                }}
              >
                Add My Comment
              </Button>
            </form>
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default TextReviewForm;
