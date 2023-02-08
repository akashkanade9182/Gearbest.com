import React ,{useState,useEffect}from 'react'
import "../styles/Card.css"
import {useDispatch,useSelector} from "react-redux"
import {Box,Flex,Image,Text,Button} from "@chakra-ui/react"






const Card = ({_id,handleNavigate,favorite,title,image,category,subcategory,brand,price,MRP,quantity,handleFavorite,hadleAddtoCart,handleAddProduct,handleRemoveProduct}) => {
 const dispatch=useDispatch();
 const cart=useSelector(store=>store.cart)
 const [state,setState]=useState(quantity);
 const[count,setCount]=useState(0);
 const isLoading=useSelector(store=>store.AppReducer.isLoading)


const Click=(_id)=>{
  hadleAddtoCart(_id)
  setCount(prev=>prev+1)
}
const Clickadd=(_id,quantity)=>{
  handleAddProduct(_id,quantity)
  setCount(prev=>prev+1)
}
const Clickremove=(_id,quantity)=>{
  handleRemoveProduct(_id,quantity)
  setCount(prev=>prev+1)
}
const handleF=(_id,favorite)=>{
  handleFavorite(_id,favorite)
  setCount(prev=>prev+1)
}





    

  return (

    <Box lineHeight="20px" p={2} textAlign="left" h={"auto"}  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
    <button className="fbtn" onClick={()=>handleF(_id,favorite)}>
      {
        <img  src={favorite?"heart.png":"love.png"} alt="" />
      }
    </button>
   
  <Image
    src={image}
    alt={brand}
    cursor="pointer"
    w="200px"
    h="170px"
    m="auto"
    onClick={()=>handleNavigate(_id)}
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
 
  <Box fontSize="xl"  textAlign="right"  mt={3}>
   <Flex justifyContent='space-around' >
   <Box className='buttonbox'>

        
    
{
  quantity===0 ? <button  className={`addcartbtn`} onClick={()=>Click(_id)}>Add To Card</button>:<div className='countingbox'>
  <button style={{backgroundColor:"#2196f9"}} onClick={()=>Clickadd(_id,quantity)}>+</button>
   <div className='quantbox'>{quantity}</div>
 <button  style={{backgroundColor:"#2196f9"}} onClick={()=>Clickremove(_id,quantity)}>-</button>
  </div>


}
</Box>
 
    
   </Flex>
  </Box>
</Box>
  )
}
export default Card;