import React from 'react'
import {Box,Button,Input} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

import Qrcode from './Qrcode'
import Searchbar from './Searchbar'
import Sign from './Sign'
import MenuButtons from "./MenuButton"
import "../../styles/Navbar.css"





const Navbar = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };




  return (
    <Box w="100%" bgColor={"#2196f3"} h={[ "auto","auto","auto","180px"]} p="10px 0">
        <Box w={"100%"} h="20%" borderBottom="1px solid white" display={"flex"} justifyContent="flex-end" alignItems={"center"}>
          <Qrcode/>
          <Button bgColor={"transparent"} color="white">
          Language
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="6 9 12 15 18 9" />
</svg>
          </Button>
          <Button bgColor={"transparent"} color="white">
            Support cneter
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="6 9 12 15 18 9" />
</svg>
          </Button>

        </Box>

{/* \*************************second Navbar***********************\ */}

        <Box w="100%" h={["auto","auto","auto", "60%"]} display={"flex"} flexDirection={["column-reverse","column-reverse","row","row"]} justifyContent="space-around" alignItems={"center"}>
        <Box w="250px" className="logobox" h="60px" mt={["15px","15px","0","0"]}>
        <img style={{width:"100%",height:"100%"}}
              onClick={handleNavigate}
             
              src="Geekbuying.jpg"
              alt="HoY8CYb.md.jpg"
            />
        </Box>

          {/* inputbox */}
        <Box   w={["90%","90%","40%","40%"]} bgColor="white"  display={"flex"}>
          <Searchbar/>
          <Button bgColor={"white"} border="none">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>
          </Button>
        </Box>
        {/* login sign up */}

        <Box w={["100%","100%","auto","auto"]} display={"flex"} justifyContent="space-around" alignItems={"center"} >
          <Sign/>
          <Button onClick={()=>navigate("/favirote")} bg="transparent" color={"white"} >
           
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
</svg> Favorites
            </Button>
            <Button onClick={()=>navigate("/cart")} bg="transparent" color={"white"} >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="19" r="2" />
  <circle cx="17" cy="19" r="2" />
  <path d="M17 17h-11v-14h-2" />
  <path d="M6 5l14 1l-1 7h-13" />
</svg>
              Cart
            </Button>

        </Box>

        </Box>
       {/* last navbar */}

       <Box  w={["auto","auto","60%","60%"]} ml="40px" mt={["15px","15px","0","0"]} h={["auto","auto","20%", "20%"]} display={"flex"}  justifyContent={["space-between","space-between","space-around","space-around"]} alignItems={"center"}>
<MenuButtons/>
<Button bg="transparent" color="white" border="none"  dis>
New
</Button>
<Button bg="transparent" display={["none","none","flex","flex"]} color="white" border="none"  dis>
Bestselling
</Button>
<Button bg="transparent" display={["none","none","flex","flex"]} color="white" border="none"  dis>
Brand
</Button>
<Button bg="transparent" display={["none","none","flex","flex"]}  color="white" border="none"  dis>
clearance
</Button>
<Button bg="transparent" display={["none","none","flex","flex"]}  color="white" border="none"  dis>
Deals
</Button>
<Button bg="transparent" display={["none","none","flex","flex"]} color="white" border="none"  dis>
Coupan
</Button>
<Button bg="transparent"  display={["none","none","flex","flex"]}color="white" border="none"  dis>
App Only
</Button>


       </Box>
      

    </Box>
  
  )
}

export default Navbar