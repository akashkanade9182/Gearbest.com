import React from 'react'
import {Link} from "react-router-dom"
import {
    Menu,
    MenuButton,
    MenuList,
 
    IconButton
  } from '@chakra-ui/react'
import Categories from "./Categorylist"
import PopoverBox from './PopoverBox'

const MenuButtons = () => {
    console.log(Categories)
  return (
    <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>}
    variant='outline'
    content="CATEGORY"
    bg="white"
    width={[ "100px","100px","150px","100px"]}

  />
  <MenuList bg={"#2196f3"} color="white" textAlign="left" p={"5px 5px"} w={["80px","80px","200px","250px"]} display={["none","none","flex","flex"]} flexDirection={"column"}>
    {
        Categories.map((ele)=><PopoverBox {...ele}/>)
    }
   
  </MenuList>
</Menu>
  )
}

export default MenuButtons;