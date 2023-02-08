import { Box ,Button,Input} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import { getLogin } from '../Redux/AuthReducer/action';
import { useSelector } from 'react-redux';







const Adminlogin = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
   
    


    const handleSubmit=()=>{
      if(email==="akash@geek.com" && password==="akash1995"){
        alert("admin login successfull");
        navigate("/dashboard")
      }else{
        alert("wrong email or password")
      }

     

        
    }


  return (
    <Box w="100%" h="100vh" mt="0" className="signupbox" t="0">
        <Box h="150px">

        </Box>
    
     <Box w="450px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" m="auto"  h="auto" bgColor="white" p="15px 45px">

<h1 style={{color:"#2196f9",fontSize:"30px",fontWeight:"bold",textAlign:"center"}}>Login</h1>


<Input mt="20px"  placeholder=' email' bgColor="white" onChange={(e)=>setEmail(e.target.value)}/>


<Input mt="20px"  placeholder={"password"} bgColor="white" onChange={(e)=>setPassword(e.target.value)}/>
<Box display={"flex"} alignItems="center">
    <input type="checkbox" />
    < p style={{marginLeft:"10px"}}> keep me signed in</p>
</Box>
<Button w="100%" bgColor={"#2196f9"} onClick={handleSubmit} color="white" p="0 10px" m="auto" display="flex" mt="15px">Sing in</Button>
<Box display={"flex"} w="100%" m="auto" mt="20px" justifyContent={"space-around"} alignItems="center">
    <Box w="40%" borderTop="1px solid black">
    </Box>
    <p>or</p>
    <Box w="40%" borderTop="1px solid black">
    </Box>
</Box>
<Box w="50px" h="50px" m="auto">
    <img src="https://www.transparentpng.com/thumb/google-logo/shady-google-logo-pictures-png-free-BjH4wQ.png" alt="" />
</Box>

</Box>

</Box>
  )
}

export default Adminlogin