import React, { useEffect,useState } from 'react'
import {Link} from "react-router-dom"

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,Button,
    PopoverCloseButton,ButtonGroup,Box,Image,Heading,Text,Flex,
  useDisclosure
  } from '@chakra-ui/react'
  import axios from "axios"
import { useSelector } from 'react-redux'


  


const Sign = () => {
  const [name,setName]=useState("Sign in")
  const data=useSelector(store=>store.AuthReducer.data)


    const { isOpen, onToggle, onClose } = useDisclosure()

useEffect(()=>{
  if(data.name){
setName(data.name)
  }else{
    setName("Signin")
  }
},[data])


  return (
    <>
    <Button mr={5} onClick={onToggle} bg="transparent"  color="white">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
</svg>
                        {name}
    </Button>
  
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      placement='right'
      closeOnBlur={false}
    >
     
      <PopoverContent  w={["200px","200px","264px","264px"]} h="86px" left={["2rem","11rem","35em","57rem"]} top={[ "80px","80px","103px","103px"]} display="flex" alignItems={"center"}>
   
              <Flex w="100%" justifyContent={"space-around"}>
         <Link to="/adminlogin"  ><Button bg="#1565c0" color="white" mt="20px">Admin</Button></Link>
           <Link to ="/login"  > <Button bg="#1565c0" color="white" mt="20px">User</Button></Link>

              </Flex>
       
      </PopoverContent>
    </Popover>
  </>
  )
}

export default Sign