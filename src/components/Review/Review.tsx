import MainHead from "../PublicCompontents/MainHead"
import Mekdad from '../../assets/Mekdad.jpg'
import AlAbbas from '../../assets/Al-Abbas.jpg'
import Zein from '../../assets/Zein.jpg'
import Hadi from '../../assets/Hadi.jpg'
import Soliman from '../../assets/Soliman.jpg'
import Mayyas from '../../assets/Mayas.jpg'
import {  SimpleGrid,Card,Avatar } from "@chakra-ui/react"

const Review = () => {


    const Review = [
        {name:" Mekdad Ahmad ",img:Mekdad,rate:"4",description:"I ordered the Nike Air Max 270, and they’re even better in person! The cushioning is amazing for all-day wear, and the sizing was spot on (I went with my usual size). Shipping was fast, and the packaging was secure. Will definitely buy from this store again!" },
        {name:" Hadi Hasan ",img:Hadi,rate:"4",description:"The Nike Air Force 1s I got are legit and super stylish. The leather quality is premium, and they fit true to size. Customer service was helpful when I asked about sizing. Highly recommend this shop for authentic Nikes at a fair price!" },
        {name:"  Soliman Al Taweel  ",img:Soliman,rate:"4",description:"Love my Nike React Vision shoes! The design is sleek, but they were a bit stiff at first. After a few wears, they molded to my feet and now feel great. One star off because they weren’t instantly comfy, but overall, a solid purchase." },
        {name:"  Al Abbas Abbas  ",img:AlAbbas,rate:"4",description:"I was hesitant to buy sneakers online, but these Nike Jordan 1s are the real deal! The details, stitching, and comfort are all top-notch. The site’s sizing guide was accurate, and delivery took only 2 days. Will be a returning customer!" },
        {name:"  Mayyas Al Rhayah  ",img:Mayyas,rate:"4",description:"Bought the Nike Revolution 6 for my workouts, and they’re fantastic! Lightweight, breathable, and no blisters even after long runs. The price was lower than other stores, and shipping was super fast. 10/10 experience!" },
        {name:"  Zein Zaher  ",img:Zein,rate:"4",description:"Got the Nike Dunk Low as a gift for my brother, and he loved them! The shoes came in a nice box, and the website even offered a gift message option. Smooth checkout and fast delivery. Great service!" },
    ]
  return (
    <>
    <MainHead head="CUSTOMER'S REVIEW"/>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 3 }} gap="40px" justifyContent="space-between">
        {Review.map((item)=>
        <Card.Root key={item.name}   boxShadow={"0 0 12px #7008e7"} >
            <Card.Body gap="2" className="bg-linear-65 from-purple-200 to-pink-200">
              <Avatar.Root width={20} height={20} borderRadius="50%" overflow={'hidden'} size="lg" shape="rounded">
                <Avatar.Image src={item.img}/>
                <Avatar.Fallback name="person img" />
              </Avatar.Root>
              <Card.Title mb="2">{item.name}</Card.Title>
              <Card.Description fontSize={{base:"15px",sm:"16px",lg:"17px"}}>
                {item.description}
              </Card.Description>
            </Card.Body>
          </Card.Root>
          )}
    </SimpleGrid>
    
    </>
  )
}

export default Review
