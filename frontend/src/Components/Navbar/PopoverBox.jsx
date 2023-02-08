import React from 'react'
import "./Popover.css"
import {Link,useNavigate } from "react-router-dom"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,ButtonGroup,Button,useDisclosure,Box,MenuItem
  } from '@chakra-ui/react'

const PopoverBox = ({title,title1,title2,title3,title4,title5,title6,arr1,arr2,arr3,arr4,arr5,arr6}) => {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const navigate=useNavigate()

    const handleClick=()=>{
      onClose ();
      navigate("/productpage")
      
    }
    
    
  return (
       <>
      <Button className='trigarbutton' h="30px" textAlign={"left"} bg="transparent" border={"none"} mr={5} onClick={onToggle} >
        {title}
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
       
        <PopoverContent   w={[ "auto","60%","auto","auto"]} bgColor="#2196f3" display={["none","none","flex","flex"]} h="500px" left={["16rem","16rem","16rem","16rem"]} justifyContent="space-between" flexDirection={"row"}>
            <div className='subcategorybox'>
                <div>
                    <h1>{title1}</h1>
                    {
                       arr1.map((ele)=><MenuItem  bgColor={"transparent"}   onClick={handleClick}>{ele}</MenuItem>)
                    }
                </div>
                <div>
                    <h1>{title2}</h1>
                    {
                       arr1.map((ele)=><MenuItem  bgColor={"transparent"}  onClick={onClose}><Link to={`/watches/${ele._id}`} >{ele}</Link></MenuItem>)
                    }
                </div>
                <div>
                    <h1>{title}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}><Link to={`/watches/${ele._id}`} >{ele}</Link></div>)
                    }
                </div>
                <div>
                    <h1>{title1}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}><Link to={`/watches/${ele._id}`} >{ele}</Link></div>)
                    }
                </div>
                <div>
                    <h1>{title1}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}><Link to={`/watches/${ele._id}`} >{ele}</Link></div>)
                    }
                </div>
                <div>
                    <h1>{title1}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}><Link to={`/watches/${ele._id}`} >{ele}</Link></div>)
                    }
                </div>
               
               

            </div>
            

        </PopoverContent>
      </Popover>
    </>
  )
}

export default PopoverBox