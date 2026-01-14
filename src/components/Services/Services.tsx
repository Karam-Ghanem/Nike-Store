import { Heading, SimpleGrid, Box, Text } from "@chakra-ui/react";
import MainHead from "../PublicCompontents/MainHead";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Services = () => {
  const Services = [
    {
      name: "Fast Delivery",
      img: "faTruckFast",
      description: " Your Nike shoes arrive swiftly within 24 hours locally! ",
    },
    {
      name: "10 Days Replacement",
      img: "faRotateLeft",
      description: " Easy exchanges, no hassle your satisfaction guaranteed! ",
    },
    {
      name: "24 x 7 Support",
      img: "faHeadset",
      description: " 24/7 customer care instant help anytime! ",
    },
  ];
  const components = {
    faTruckFast: faTruckFast,
    faRotateLeft: faRotateLeft,
    faHeadset: faHeadset,
  };

  return (
    <>
      <MainHead head="OUR SERVICES" />
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 3, lg: 3, xl: 3 }}
        gap="0px"
        textAlign={"center"}
        
      >
        {Services.map((item) => {
          return (
            <Box key={item.name} marginBottom={"70px"}>
              <Box marginBottom={"30px"}>
                <FontAwesomeIcon
                  icon={components[item.img as keyof typeof components]}
                  size="4x"
                  color="#ffa500"
                />
              </Box>
              <Heading
                size={{ base: "xl", sm: "2xl", lg: "3xl", xl: "4xl" }}
                marginBottom={"30px"}
              >
                {item.name}
              </Heading>
              <Text
                fontSize={{ base: 13, sm: 14, lg: 17, xl: 18 }}
                color={"777"}
              >
                {item.description}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Services;
