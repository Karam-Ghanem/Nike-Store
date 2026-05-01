import { Box, Button, Checkbox, SimpleGrid, Text } from "@chakra-ui/react";
import { RadioGroup } from "@chakra-ui/react";
import { Accordion, Span } from "@chakra-ui/react";
import { useState } from "react";
import useReviewStore from "./reviewStore";
import { Toaster, toaster } from "@/components/ui/toaster";

// ---------------- TYPES ----------------

export type CheckBoxItem = {
  qustion: string;
  answers: string[];
  answersSelected: string[];
};

export type RadioItem = {
  qustion: string;
  answers: string[];
  selected: string;
};

// ---------------- COMPONENT ----------------

const ReviewWithSelect = () => {
  // CHECKBOX DATA
  const initialCheckBoxData: CheckBoxItem[] = [
    {
      qustion: "Issues you faced",
      answers: [
        "Payment issues",
        "Size issues",
        "Image issues",
        "Delivery issues",
      ],
      answersSelected: [],
    },
    {
      qustion: "Negative points",
      answers: [
        "Difficulty finding the product",
        "Size issues",
        "Image issues",
        "Payment issues",
        "Delivery issues",
        "Login issues",
      ],
      answersSelected: [],
    },
    {
      qustion: "Shoe‑related points (without evaluating Nike itself)",
      answers: [
        "Matching Nike’s original quality",
        "Matching the requested size",
        "Matching the color and images",
        "Comfort when wearing the shoe",
      ],
      answersSelected: [],
    },
    {
      qustion: "What did you like most about the website?",
      answers: [
        "Overall shopping experience",
        "Fast page loading",
        "Easy payment process",
        "Variety of products",
        "Clear sizing",
        "Fast delivery",
        "Ease of use",
      ],
      answersSelected: [],
    },
    {
      qustion: "What would you like to see improved?",
      answers: [
        "Improve customer service",
        "Improve search experience",
        "Add more payment methods",
        "Improve product images",
        "Improve size presentation",
        "Improve user interface",
        "Improve website speed",
      ],
      answersSelected: [],
    },
    {
      qustion: "Payment issues you faced",
      answers: [
        "Couldn’t complete the payment",
        "Verification code didn’t arrive",
        "Page froze",
        "Card was not accepted",
      ],
      answersSelected: [],
    },
    {
      qustion: "Delivery issues you faced",
      answers: [
        "Product arrived in poor condition",
        "Product arrived late",
        "Wrong address issue",
        "Delivery delay",
      ],
      answersSelected: [],
    },
  ];

  const [checkBoxState, setCheckBoxState] =
    useState<CheckBoxItem[]>(initialCheckBoxData);

  // RADIO DATA (مع selected)
  const initialRadioData: RadioItem[] = [
    {
      qustion: "Rate the ease of using the website",
      answers: ["Excellent", "Good", "Acceptable", "Poor"],
      selected: "",
    },
    {
      qustion: "Rate the delivery speed",
      answers: ["Fast", "Acceptable", "Slow"],
      selected: "",
    },
    {
      qustion: "Rate your overall shopping experience",
      answers: ["Excellent", "Good", "Poor"],
      selected: "",
    },
    {
      qustion: "Rate the clarity of product images",
      answers: ["Excellent", "Good", "Acceptable", "Poor"],
      selected: "",
    },
    {
      qustion: "Rate the clarity of sizing information",
      answers: ["Clear", "Acceptable", "Not clear"],
      selected: "",
    },
    {
      qustion: "Rate the responsiveness of customer service",
      answers: [
        "Fast",
        "Acceptable",
        "Slow",
        "I did not contact customer service",
      ],
      selected: "",
    },
    {
      qustion: "Rate the ease of the payment process",
      answers: ["Easy", "Acceptable", "Difficult"],
      selected: "",
    },
    {
      qustion: "Rate the packaging quality",
      answers: ["Excellent", "Good", "Acceptable", "Poor"],
      selected: "",
    },
    {
      qustion: "Rate the website loading speed",
      answers: ["Fast", "Acceptable", "Slow"],
      selected: "",
    },
  ];

  const [radioState, setRadioState] = useState<RadioItem[]>(initialRadioData);

  const { addCheckBoxEvalute, addRadioEvalute } = useReviewStore();

  return (
    <>
      <Toaster />
      <Accordion.Root
        collapsible
        marginBottom={4}
        className="bg-linear-65 from-purple-200 to-pink-200"
      >
        <Accordion.Item key={""} value={""}>
          <Accordion.ItemTrigger>
            <Span
              padding={2}
              fontSize={20}
              color={"blue"}
              flex="1"
              cursor={"pointer"}
            >
              Your Feedback Helps Us Improve the Website
            </Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>

          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <form>
                <Box
                  className="bg-linear-65 from-purple-200 to-pink-200"
                  marginBottom={4}
                  padding={2}
                >
                  <SimpleGrid columns={2} gap={10}>
                    {/* CHECKBOX SECTION */}
                    <Box>
                      {checkBoxState.map((cba) => (
                        <Box marginBottom={4} key={cba.qustion}>
                          <Text marginBlock={2}>{cba.qustion}</Text>

                          {cba.answers.map((answer) => (
                            <Box key={answer} marginLeft={5}>
                              <Checkbox.Root
                                colorPalette={"green"}
                                variant={"solid"}
                                checked={cba.answersSelected.includes(answer)}
                                onCheckedChange={(checked) => {
                                  setCheckBoxState((prev) =>
                                    prev.map((item) => {
                                      if (item.qustion !== cba.qustion)
                                        return item;

                                      const current = item.answersSelected;

                                      return {
                                        ...item,
                                        answersSelected: checked
                                          ? [...current, answer]
                                          : current.filter((a) => a !== answer),
                                      };
                                    })
                                  );
                                }}
                              >
                                <Checkbox.HiddenInput />
                                <Checkbox.Control bg={"#7f7fe9"} />
                                <Checkbox.Label>{answer}</Checkbox.Label>
                              </Checkbox.Root>
                              <br />
                            </Box>
                          ))}
                        </Box>
                      ))}
                    </Box>

                    {/* RADIO SECTION */}
                    <Box>
                      {radioState.map((ra) => (
                        <Box marginBottom={4} key={ra.qustion}>
                          <Text marginBottom={2}>{ra.qustion}</Text>

                          <RadioGroup.Root
                            value={ra.selected}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const value = e.target.value;

                              setRadioState((prev) =>
                                prev.map((item) =>
                                  item.qustion === ra.qustion
                                    ? { ...item, selected: value }
                                    : item
                                )
                              );
                            }}
                            variant={"subtle"}
                          >
                            {ra.answers.map((answer) => (
                              <Box key={answer} marginLeft={5}>
                                <RadioGroup.Item value={answer}>
                                  <RadioGroup.ItemHiddenInput />
                                  <RadioGroup.ItemIndicator bg={"#7f7fe9"} />
                                  <RadioGroup.ItemText>
                                    {answer}
                                  </RadioGroup.ItemText>
                                </RadioGroup.Item>
                                <br />
                              </Box>
                            ))}
                          </RadioGroup.Root>
                        </Box>
                      ))}
                    </Box>
                  </SimpleGrid>

                  {/* SUBMIT BUTTON */}
                  <Button
                    marginTop={4}
                    bg={"#7f7fe9"}
                    transition={"0.3s"}
                    _hover={{ backgroundColor: "blue" }}
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();

                      addCheckBoxEvalute(checkBoxState);
                      addRadioEvalute(radioState);

                      // RESET STATES AFTER SUBMIT
                      setCheckBoxState((prev) =>
                        prev.map((item) => ({
                          ...item,
                          answersSelected: [],
                        }))
                      );

                      setRadioState((prev) =>
                        prev.map((item) => ({
                          ...item,
                          selected: "",
                        }))
                      );

                      toaster.create({
                        title: "Your review has been submitted successfully",
                        type: "success",
                        duration: 5000,
                      });
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};

export default ReviewWithSelect;
