import { SimpleGrid, Box, Heading, Image, HStack } from "@chakra-ui/react";
import backGroundImage from "@/assets/bg1.png";
import ShoeseIMG from "@/assets/shoese/shoes.png";
import Products from "../Products/Products";
import About from "../About/About";
import Review from "../Review/Review";
import Services from "../Services/Services";
import WelcomeBack from "../WelcomeBack/WelcomeBack";

const Landing = () => {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} gap="10px" marginTop={100} bg={""}>
        <Box padding={2}>
          <Heading
            size={{ lg: "5xl", xl: "6xl" }}
            display={{ base:"none",sm: "none", md: "none", lg: "block" }}
          >
            NIKE
            <br />
            Collection
          </Heading>
          <HStack justifyContent="center">
            <Heading
              size="4xl"
              backgroundColor=""
              display={{ sm: "block", md: "block", lg: "none" }}
            >
              NIKE Collection
            </Heading>
          </HStack>
          <Box
            padding={6}
            lineHeight="2"
            bgImage={{md:`url(${backGroundImage})`,base:`url(${backGroundImage})`,lg:"none"}}
            bgSize="cover"
            bgRepeat="no-repeat"
            width="100%"
            fontSize="20px"
            className="shadow-xl/30"
          >
            Discover the latest Nike Collection now available in our store!
            Whether you're looking for high-performance sneakers, we have
            everything you need to elevate your sporty style . Stand out with
            Nike’s modern designs and premium quality that deliver comfort and
            sophistication with every step. Shop now and enjoy an unmatched
            shopping experience with exclusive discounts and fast shipping!"
          </Box>
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Image width="800px" src={backGroundImage} />
          <Image
            marginTop={{ md: "-40px", lg: "-270px" }}
            marginLeft="10px"
            width={{ md: "250px", lg: "280px", xl: "400px" }}
            src={ShoeseIMG}
          />
        </Box>
      </SimpleGrid>
      

      {/* Product Section */}
      <Products/>
      {/* Web About */}
      <About/>
      {/* Review */}
      <Review/>
      {/* Services */}
      <Services/>
      {/* Welcome Back */}
      <WelcomeBack/>



    </Box>
  );
};

export default Landing;
