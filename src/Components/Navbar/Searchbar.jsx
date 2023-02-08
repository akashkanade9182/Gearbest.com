import React,{useState,useEffect, useRef} from 'react'
import styled from "styled-components"
import axios from "axios"
import {Box,Text,Input, Button} from "@chakra-ui/react"
import "../../styles/Searchbar.css"
import {Link,Navigate,useNavigate } from "react-router-dom"


const getdata=(query)=>{
   return axios.get(`https://poised-slacks-bear.cyclic.app/geekbuying/title?title=${query}`)
}

const Searchbar = ()=> {
    const[inputText,setInputText]=useState("");
    const[suggestions,setSuggestions]=useState([])

    const[active,setActive]=useState(0);
    const scrollRef=useRef();
    const navigate=useNavigate();


    const handleInputTextChange=(e)=>{
      
            setInputText(e.target.value)
            getdata(e.target.value).then((r)=>{
                setSuggestions(r.data)
                console.log(r.data)
            }).catch((e)=>{
                console.log(e)
            })
    
        
      
    }
    const handleClick=(id)=>{
        setSuggestions([])
        navigate(`/${id}`)
    }


const handleClose=()=>{
    setInputText("")
    setSuggestions([])
    
}






  return (
    <>
    <Input  type="search" bgColor={"white"}  w="90%" border="none" placeholder="search keywords" onChange={handleInputTextChange}/>
    <Box className="SuggestionBox" len={5} maxHeight={suggestions.length>0?"440px":"0"}  active={active} ref={scrollRef} bg="white" >
    <Button className='closebtn' bgColor="blue" color="white" onClick={handleClose}>Close</Button>
    {
       suggestions && suggestions.map((item,index)=>(
            <Box w="100%"  className='item' p="10px 10px" display="flex" onClick={()=>handleClick(item._id)} borderBottom="1px solid black" alignItems="center">
                <Box w="80px" h="80px">
                    <img  style={{width:"100%",height:"100%"}}src={item.image} alt="err" />
              
                </Box>
                <Box ml="25px"  textAlign={"left"}>
                        {item.title}

                    </Box>

            </Box>

        ))
   
    }
     
 </Box>
 </>
  )
}


const SuggestionBox=styled.div`
border:1px solid black;
background-color:white;
position:absolute;
top:6rem;
width:400px;
display:flex;
flex-direction:column;
max-height:400px;
overflow:auto;
& *{
 
    flex:1;
    text-align:left;
    padding:10px;
   
}
& :nth-child(${({active})=>active}){
    background-color:rgba(0,0,0,0.09);
    cursor:pointer;
}
&::-webkit-scrollbar {
    display: none;
  }
`

const SearchbarWrapper=styled.div`
border:1px solid red;
display:flex;
padding:5px 10px;
aling-items:center;
`


const Wrapper=styled.div`
max-width:400px;
margin:auto;
`

const Boxs=styled.div`
display:flex;
width:100%;
border-top:1px solid black;
justify-content:space-between;
flex-direction:row;
& :hover{
    background-color:grey;
}
`
export default Searchbar