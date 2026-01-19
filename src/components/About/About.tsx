import { Box, HStack, Stack,Text, VStack } from "@chakra-ui/react"
import MainHead from "../PublicCompontents/MainHead"
import aboutShoese1 from "../../assets/shoese/red_shoes1.png"
import aboutShoese2 from "../../assets/shoese/red_shoes2.png"
import aboutShoese3 from "../../assets/shoese/red_shoes3.png"
import aboutShoese4 from "../../assets/shoese/red_shoes4.png"

const  webImgs =[
    {src:aboutShoese1, width:"100px" , border:"1px solid #701ad1"},
    {src:aboutShoese2, width:"100px" , border:"1px solid #701ad1"},
    {src:aboutShoese3, width:"100px" , border:"1px solid #701ad1"},
    {src:aboutShoese4, width:"100px" , border:"1px solid #701ad1"},
]
const About = () => {
  return (
    <>
    <MainHead head="WEB ABOUT"/>
    <VStack>
    <HStack justifyContent={"center"} marginBottom={10}>
        <Stack marginRight={10} direction="column" bg="" justifyContent="space-between">  
            {webImgs.map((item)=><Box key={item.src} marginBottom={3} className=" bg-linear-65 from-purple-500 to-pink-500" cursor="pointer" border={item.border} width={item.width} ><img src={item.src} alt="" /></Box>)}
        </Stack>
        <Box border={"3px solid #701ad1"} borderRadius={10} boxShadow={"0 0 8px #c72092"}>
            <img width={400} src={aboutShoese1} alt="" />
        </Box>
    </HStack>
    <Box width={{base:"350px",sm:"450px",lg:"65%"}} padding={4} boxShadow={"0 0 12px #c72092"} border={"1px solid #701ad1"} borderRadius={10} textAlign="center">
        <Text textAlign="start" lineHeight="1.6" fontSize={{base:"13px",sm:"14px",md:"15px",lg:"15px",xl:"16px"}} >
            Welcome to Nike Store,
            your premier destination for authentic Nike footwear in Lattakia,
            Syria. Established in 2024,
            we are committed to bringing you the latest and most stylish Nike sneakers for men and women,
            all 100% genuine and backed by quality assurance.
            At Nike Store, we pride ourselves on fast and reliable service,
            offering 24-hour shipping within Syria and international delivery within one week.
            Whether you're looking for performance running shoes, trendy lifestyle sneakers,
            or durable training footwear,
            we’ve got you covered.
            Our mission is to provide an exceptional shopping experience with top-tier customer support. 
            Thank you for choosing Nike Store—step into style and comfort with us!
        </Text>
    </Box>
    </VStack>

    </>
  )
}

export default About
