import MainHead from "@/components/PublicCompontents/MainHead";
import useReviewStore from "@/Pages/Review/reviewStore";
import { Box, Text, SimpleGrid, Badge } from "@chakra-ui/react";
import { Accordion, Span } from "@chakra-ui/react";
import type { CheckBoxItem,RadioItem } from "@/Pages/Review/Data/Qustions";

const UsersReview = () => {
  const { checkEvalutes, radioEvalutes } = useReviewStore();

  return (
    <>
      <MainHead head="USERS REVIEWS" />

      <SimpleGrid columns={2} gap={8} padding={5}>
        {checkEvalutes.map((checkGroup: CheckBoxItem[], index: number) => (
          <Accordion.Root
            key={index}
            collapsible
            defaultValue={[]}
            padding={0} 
          >
            <Accordion.Item value={`review-${index}`}>
              <Accordion.ItemTrigger
                style={{
                  backgroundColor: "#1976d2",
                  padding: "12px",
                  borderRadius: "8px",
                  background: "#f3f3f3",
                  marginBottom: "6px",
                }}
              >
                <Span flex="1" fontSize={18} fontWeight="bold">
                  Review #{index + 1}
                </Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>

              <Accordion.ItemContent>
                <Accordion.ItemBody
                  style={{
                    borderWidth: "1px",
                    borderRadius: "8px",
                    padding: "16px",
                    marginTop: "4px",
                    borderBottom: "none",
                  }}
                >
                  {/* CHECKBOX SECTION */}
                  <Box marginBottom={5} marginTop={3}>
                    {checkGroup.map((q: CheckBoxItem) => (
                      <Box key={q.qustion} marginBottom={3}>
                        <Text fontWeight="bold">{q.qustion}</Text>

                        {q.answersSelected.length > 0 ? (
                          <Box marginTop={1}>
                            {q.answersSelected.map((ans: string) => (
                              <Badge
                                key={ans}
                                colorScheme="purple"
                                marginRight={2}
                                marginTop={1}
                              >
                                {ans}
                              </Badge>
                            ))}
                          </Box>
                        ) : (
                          <Text fontSize="sm" color="gray.500">
                            No answers selected
                          </Text>
                        )}
                      </Box>
                    ))}
                  </Box>

                  {/* RADIO SECTION */}
                  <Box>
                    {radioEvalutes[index] &&
                      radioEvalutes[index].map((r: RadioItem) => (
                        <Box key={r.qustion} marginBottom={3}>
                          <Text fontWeight="bold">{r.qustion}</Text>
                          <Badge colorScheme="green" marginTop={1}>
                            {r.selected || "No answer"}
                          </Badge>
                        </Box>
                      ))}
                  </Box>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>
        ))}
      </SimpleGrid>
    </>
  );
};

export default UsersReview;
