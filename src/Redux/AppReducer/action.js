import axios from "axios"
import * as types from "./actionType"



const getData=(payload)=>(dispatch)=>{
  return axios.get(`https://poised-slacks-bear.cyclic.app/geekbuying?category=smartwatch`,payload).then((r)=>{
    if(r.data.length){
      dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }else{
      dispatch({type:types.GET_PRODUCTS_FAILURE})
    }
  }).catch((e)=>{
    dispatch({type:types.GET_PRODUCTS_FAILURE})
  })
}

const EditCart=(id,payload)=>(dispatch)=>{
  dispatch({type:types.PATCH_PRODUCT_REQUEST});
      return axios.patch(`https://poised-slacks-bear.cyclic.app/geekbuying/${id}`,payload)
      .then((r)=>{
              dispatch(getData())
          console.log(r.data)

      })
      .catch((e)=>{
          dispatch({type:types.PATCH_PRODUCT_FAILURE,payload:e})
      })
}


/**********************Single ProducPage *********************** */
const getOneProduct=(id)=>(dispatch)=>{
  dispatch({type:types.GET_PRODUCTS_REQUEST1});
  return axios.get(`https://poised-slacks-bear.cyclic.app/geekbuying/${id}`).then((r)=>{
     dispatch({type:types.GET_PRODUCTS_SUCCESS1,payload:r.data})
  }).catch((e)=>{
      dispatch({type:types.GET_PRODUCTS_FAILURE1,payload:e})
  })
  
}
const EditSingleCart=(id,payload)=>(dispatch)=>{
  dispatch({type:types.PATCH_PRODUCT_REQUEST});
      return axios.patch(`https://poised-slacks-bear.cyclic.app/geekbuying/${id}`,payload)
      .then((r)=>{
              dispatch(getOneProduct(id))
          console.log(r.data)

      })
      .catch((e)=>{
          dispatch({type:types.PATCH_PRODUCT_FAILURE,payload:e})
      })
}
export {getData,EditCart,getOneProduct,EditSingleCart}