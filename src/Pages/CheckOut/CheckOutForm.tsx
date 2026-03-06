import { Textarea } from "@chakra-ui/react";
import { Accordion, Span } from "@chakra-ui/react";
import { Field, Input, Stack } from "@chakra-ui/react";
const CheckOutForm = () => {
  return (
    <Accordion.Root collapsible>
      <Accordion.Item value="form" bg="#f3f1f1" padding={3}>
        <Accordion.ItemTrigger>
          <Span flex="1" bg="#7008e7" color="white" padding={2}>
            Billing Adress
          </Span>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <form action="">
              <Stack gap="4" align="flex-start" maxW="xl">
                <Field.Root>
                  {/* <Field.Label fontSize={"20px"}> Name</Field.Label> */}
                  <Input border={"1px solid #a800b7"} placeholder="Name" />
                  <Field.ErrorText></Field.ErrorText>
                </Field.Root>

                <Field.Root>
                  {/* <Field.Label fontSize={"20px"}>Email</Field.Label> */}
                  <Input border={"1px solid #a800b7"} placeholder="Email" />
                  <Field.ErrorText></Field.ErrorText>
                </Field.Root>

                <Field.Root>
                  {/* <Field.Label fontSize={"20px"}>Phone</Field.Label> */}
                  <Input border={"1px solid #a800b7"} placeholder="Phone" />
                  <Field.ErrorText></Field.ErrorText>
                </Field.Root>

                <Field.Root>
                  {/* <Field.Label fontSize={"20px"}>Password</Field.Label> */}
                  {/* <Input border={"1px solid #a800b7"} /> */}
                  <Textarea
                    placeholder="Say Something"
                    outline="1px solid #a800b7"
                  ></Textarea>
                  <Field.ErrorText></Field.ErrorText>
                </Field.Root>
              </Stack>
            </form>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default CheckOutForm;
