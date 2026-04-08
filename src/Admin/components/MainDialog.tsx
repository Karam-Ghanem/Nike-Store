import type { Product } from "@/components/Products/Products Data/productsList";
import { Button, CloseButton, Dialog, Portal, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Toaster,toaster } from "@/components/ui/toaster";

interface Props {
  btnName: string;
  theProces: string;
  completeTheProcess: (parameter: string|Product) => void;
  parameter: string | Product;
  children:ReactNode;
}
const MainDialog = ({theProces,completeTheProcess,parameter,children}:Props) => {
  return (
    <>
      <Toaster />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          {/* <Button bg={'transparent'} size="sm">
          {btnName}
        </Button> */}
          {children}
        </Dialog.Trigger>
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
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button onClick={() => {}} variant="outline">
                    No
                  </Button>
                </Dialog.ActionTrigger>
                <Button
                  bg={"green.500"}
                  onClick={() => {
                    completeTheProcess(parameter);
                    toaster.create({
                      title: `One Shoese Deleted successfully!`,
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
