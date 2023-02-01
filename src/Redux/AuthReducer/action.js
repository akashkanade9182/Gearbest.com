import * as types from "./actionTypes"
import axios from "axios"




const getLogin=(payload)=>(dispatch)=>{
     dispatch({type:types.LOGIN_REQUEST})

    return axios.post("https://rich-erin-sturgeon-suit.cyclic.app/login",payload).then((r)=>{
     if(r.data.token){
        dispatch({
            type:types.LOGIN_SUCCESS,
            payload:r.data
        })
        
     }else{
        alert("wrong password or email")
     }
        // console.log(r.data.token)
    }).catch((e)=>{
        console.log(e)
    })
}

export {getLogin};