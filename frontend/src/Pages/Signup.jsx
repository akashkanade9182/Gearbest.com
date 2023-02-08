import { Box ,Button,Input} from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Signup.css"




const postData=(payload)=>{
    return axios.post(`https://poised-slacks-bear.cyclic.app/user/signup`,payload)
}


const Singup = () => {
    const [name,setName]=useState("");
    const[mobile,setMobile]=useState();
    const [address,setAddress]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[cpassword,setCpassword]=useState("")
    const navigate=useNavigate();


    const handleSubmit=()=>{
        if(password===cpassword){
            let data={
                name,email,password,mobile,address
            }
            postData(data).then((r)=>{
               if(r.data==="Singup Succefully"){
                navigate("/")
               }else{
                alert("something is error ,try again")
               }
            })
        }
        else{
            alert("please enter correct password")
        }
      

        
    }

  return (
    <Box w="100%" h="100vh" mt="0" className="signupbox" t="0">
        <Box h="100px">

        </Box>
         <Box w="450px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" m="auto"  h="auto" bgColor="white" p="15px 45px">
         <h1 style={{color:"#2196f9",fontSize:"30px",fontWeight:"bold",textAlign:"center"}}>Sign Up</h1>
<Input mt="20px"  bgColor="white" placeholder=' full name' color="grey" onChange={(e)=>setName(e.target.value)}/>

<Input mt="20px"  placeholder=' Address' bgColor="white" onChange={(e)=>setAddress(e.target.value)}/>

<Input mt="20px" type={"number"}  placeholder=' mobile number' bgColor="white" onChange={(e)=>setMobile(e.target.value)}/>

<Input mt="20px"  placeholder=' email' bgColor="white" onChange={(e)=>setEmail(e.target.value)}/>


<Input mt="20px"  placeholder={"password"} bgColor="white" onChange={(e)=>setPassword(e.target.value)}/>

<Input mt="20px" placeholder='confirm password' bgColor="white" onChange={(e)=>setCpassword(e.target.value)}/>
<Button w="100%" bgColor={"#2196f9"} onClick={handleSubmit} color="white" p="0 10px" m="auto" display="flex" mt="15px">Create account</Button>

<p style={{textAlign:"center"}}> already have account?<a href="/login">Login</a></p>
  </Box>

  </Box>
  )
}

export default Singup