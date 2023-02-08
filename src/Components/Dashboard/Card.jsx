import React ,{useState,useEffect}from 'react'
import "../../styles/Card.css"
import {useDispatch,useSelector} from "react-redux"
import {Box,Flex,Image,Text,Button} from "@chakra-ui/react"






const Card = ({_id,title,image,category,subcategory,brand,price,setId,onOpen,handleDelete,quantity,}) => {
 const dispatch=useDispatch();
 const cart=useSelector(store=>store.cart)
 const [state,setState]=useState(quantity);
 const[count,setCount]=useState(0);
 const isLoading=useSelector(store=>store.AppReducer.isLoading)



const handleEdit=(id)=>{

  setId(id)
  onOpen();
}



    

  return (

    <Box lineHeight="20px" p={2} textAlign="left" h={"auto"}  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
   
   
  <Image
    src={image}
    alt={brand}
    cursor="pointer"
    w="200px"
    h="170px"
    m="auto"
  
  />
  <Text fontSize={['xs','sm','sm','md']} className="producttitle">
    {title}
  </Text>
  <Text  fontSize={['xs','sm','sm','md']}  mt="1rem" color="red" fontWeight="bold">
    Rs. {price}(19%off)
  </Text>
  <Text fontSize={['xs','sm','sm','sm']} mt="1rem"  fontWeight="bold">
    Brand:- {brand}
  </Text>
  <Text className='mrpname'>MRP<span></span><span>{`Rs.${price}`}</span></Text>
 
   <Box  w="100%"  display="flex" justifyContent={"space-between"}  m="auto">
<Button w="40%"  bgColor={"#2196f9"} color="white" setId={setId} onClick={()=>handleEdit(_id)}>Edit</Button>
<Button  
 w="40%"  
 bgColor={"#2196f9"}
  color="white"
  onClick={()=>handleDelete(_id)}
   >Delete</Button>
    </Box>
</Box>
  )
}
export default Card;