import { Box ,Button, Image, Select, Text} from '@chakra-ui/react'
import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addNewProducts } from '../Redux/AppReducer/action'
import { useSelector } from 'react-redux'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const AddProducts = () => {
const [title,setTitle]=useState("")
const[image,setImage]=useState("")
const[brand,setBrand]=useState("")
const[category,setCategory]=useState("")
const[price,setPrice]=useState("")
const navigate=useNavigate();
const dispatch=useDispatch();
const isLoading=useSelector(store=>store.AppReducer.isLoading)

const handleClick=()=>{
let data={
  title,
  image,
  images:image,
  brand,
  price,
  favirote:false,
  quantity:0,
  category,
  rating:Math.random() * 10

}
dispatch(addNewProducts(data))


}



  return (
   <Box w="100%">
     <Box w="100%" h="80px" p="0 15px" display={"flex"} alignItems="center" justifyContent={"space-around"} bgColor={"#2196f9"}>
        <h1 className='logotext'>Geekbuying</h1>
            <Button >Total Products:-{50}</Button>
            <Button onClick={()=>navigate("/dashboard")}>Dashboard</Button>
            <Button onClick={()=>navigate("/addproducts")}>Add New Products</Button>
           
        </Box>
        <Box mt="20px" display="flex" w="100%" justifyContent={"space-around"}>
          <Box w="46%" p="20px 20px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" >
            <Box w="100%" h="200px"  display="flex" alignItems={"center"}  justifyContent="space-around" border="1px solid black" borderRadius="15px">
           
           {
            image?<Image w="45%" h="95%"  src={image} alt="Link is not work" />:<Text fontSize={"20px"} textAlign={"center"} mt="15%">No Images</Text>
           } 
            </Box>
           
            <Text color="whie" mt="20px" fontSize={"20px"}>Title:-{title?title:"No title"}</Text>
            <Text  color="whit" mt="20px" fontSize={"20px"}>Brand:-{brand?brand:"No Brand"}</Text>
            <Text  color="whit" mt="20px" fontSize={"20px"}>Price:-{price?price:"No Price"}</Text>
            <Text  color="whit" mt="20px" fontSize={"20px"}>Category:-{category?category:"No Category"}</Text>
            

          </Box>

         { isLoading?<Box padding='6' w="46%" boxShadow='lg' bg='white'>
  <SkeletonText mt='4' noOfLines={10} spacing='4' skeletonHeight='10' />
</Box>:<Box w="46%"  p="20px 20px" h="auto"   boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"  >
          <Heading>Enter Details</Heading>
              <FormControl>
              <FormLabel>Title</FormLabel>
              <Input onChange={(e)=>setTitle(e.target.value)} />
              <FormLabel>Image Link</FormLabel>
              <Input  onChange={(e)=>setImage(e.target.value)}/>
              <FormLabel>Brand</FormLabel>
              <Input  onChange={(e)=>setBrand(e.target.value)}/>
              <FormLabel>Price</FormLabel>
              <Input type="number" onChange={(e)=>setPrice(e.target.value)}/>
              <Select  mt="20px"  placeholder="Select Category">
                <option value="">Electronic</option>
                <option value="">Computer and Hardware</option>
                <option value="">Clothes</option>
                <option value="">Home and Kitches</option>
              </Select>
              <Select  mt="20px" onChange={(e)=>setCategory(e.target.value)} placeholder="Select Sub-Category">
                <option value="smartwatch">smartwatch</option>
                <option value="computer">computer</option>
                <option value="laptop">laptop</option>
                <option value="manClothes">Mans clothes</option>
                <option value="homepage">homepage</option>
                
              </Select>
              <Button onClick={handleClick} w="100%" m="auto" mt="20px" bgColor={"#2196f9"} color="white">Add</Button>
             
            </FormControl>

          </Box>}


        </Box>
   </Box>

  )
}

export default AddProducts