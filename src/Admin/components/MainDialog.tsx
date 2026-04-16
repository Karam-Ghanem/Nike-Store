import type { Product } from "@/components/Products/Products Data/productsList";
import { Button, CloseButton, Dialog, Portal, Text } from "@chakra-ui/react";
import { useState, type ReactNode } from "react";
import { Toaster,toaster } from "@/components/ui/toaster";
import { Field, Input } from "@chakra-ui/react";

interface Props {
  theProces: string;
  completeTheProcess: (parameter: string|Product) => void;
  parameter: string | Product;
  children:ReactNode;
}
const MainDialog = ({theProces,completeTheProcess,parameter,children}:Props) => {

const url = window.location.href;
const isInMyPurchase = url.includes('mypurchase') ? true : false;

  const [returnCause,setReturnCause] = useState('')
  return (
    <>
      <Toaster />
      <Dialog.Root>
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title
                  color={"black"}
                >{`Confirm The ${theProces} Process`}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text color={"black"}>
                  {`Are You Sure To ${theProces} This Shoese ?`}
                </Text>

                {isInMyPurchase && (
                  <Field.Root marginTop={2}>
                    <Input
                      placeholder="Please tell us why you returned the shoese"
                      value={returnCause}
                      onChange={(e) => {
                        setReturnCause(e.target.value);
                      }}
                      border={"1px solid #a800b7"}
                    />

                    <Field.ErrorText></Field.ErrorText>
                  </Field.Root>
                )}
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button bg={"#E53935"} color={"white"}>
                    No
                  </Button>
                </Dialog.ActionTrigger>
                <Button
                  bg={"#7008e7"}
                  onClick={() => {
                    completeTheProcess(parameter);
                    toaster.create({
                      title: `One Shoese ${isInMyPurchase? 'Returned' : 'Deleted'} successfully!`,
                      type: "success",
                      duration: 5000,
                    });
                  }}
                >
                  Yes
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};


export default MainDialog;
