import React, { useState } from "react";
import "./Productcard.css"
import {Box,Flex,Image,Text,Button} from "@chakra-ui/react"



const ProductCard = ({ title,image, price,brand,favorite,_id}) => {
  const heartIcon1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6HeC2Y4ch1beUcQ68_zGrVfqlERPYJl4klmG3-XJQoEwQVVjV60rQDoxSRHQHpjNOHU&usqp=CAU";
  const heartIcon2 = "https://stceciliasinfants.org.uk/wp-content/uploads/2021/05/yellow-heart.png"
  // console.log(id)
  const [icon, setIcon] = useState(heartIcon1)

  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    
  };




  return (
    <Box lineHeight="20px" p={2}  textAlign="left" h={"auto"}  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <button className="fbtn">
        {
          <img src={favorite?"hart.png":"love.png"} alt="" />
        }
      </button>
     
    <Image
      src={image}
      alt={brand}
      cursor="pointer"
      w="250px"
      h="170px"
    />
    <Text fontSize={['xs','sm','sm','sm']} className="producttitle">
      {title}
    </Text>
    <Text mt="1rem" color="red" fontWeight="bold">
      Rs. {price}
    </Text>
   
    <Box fontSize="xl"  textAlign="right"  mt={3}>
     <Flex justifyContent='space-around' >
     <Button bg="#2196f3" color="white">More Detail</Button>
     {/* <Box display="flex" alignItems={"center"}>
     <i class="bx bx-heart"></i>

     </Box> */}
      
     </Flex>
    </Box>
  </Box>
  );
};

export default ProductCard;