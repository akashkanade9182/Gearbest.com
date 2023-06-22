import * as types from "./actionTypes"
import axios from "axios"
import { useNavigate } from 'react-router-dom';





const getLogin=(payload,navigate,path)=>(dispatch)=>{
     dispatch({type:types.LOGIN_REQUEST})

    return axios.post("https://poised-slacks-bear.cyclic.app/user/login",payload).then((r)=>{
     if(r.data.token){
       dispatch({type:types.LOGIN_SUCCESS,payload:r.data})
      navigate("/login")
      
        
     }else{
        alert("wrong password or email")
     }
        // console.log(r.data.token)
    }).catch((e)=>{
        console.log(e)
        alert("wrong password or email")
    })
}

export {getLogin};