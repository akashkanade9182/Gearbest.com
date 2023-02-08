import axios from "axios"
import * as types from "./actionType"



const getData = (payload) => (dispatch) => {
  return axios.get(`https://poised-slacks-bear.cyclic.app/geekbuying?category=smartwatch`, payload).then((r) => {
    if (r.data.length) {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data })
    } else {
      dispatch({ type: types.GET_PRODUCTS_FAILURE })
    }
  }).catch((e) => {
    dispatch({ type: types.GET_PRODUCTS_FAILURE })
  })
}

const EditCart = (id, payload) => (dispatch) => {
  dispatch({ type: types.PATCH_PRODUCT_REQUEST });
  return axios.patch(`https://poised-slacks-bear.cyclic.app/geekbuying/${id}`, payload)
    .then((r) => {
      dispatch(getData())
      console.log(r.data)

    })
    .catch((e) => {
      dispatch({ type: types.PATCH_PRODUCT_FAILURE, payload: e })
    })
}


/**********************Single ProducPage *********************** */
const getOneProduct = (id) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST1 });
  return axios.get(`https://poised-slacks-bear.cyclic.app/geekbuying/${id}`).then((r) => {
    dispatch({ type: types.GET_PRODUCTS_SUCCESS1, payload: r.data })
  }).catch((e) => {
    dispatch({ type: types.GET_PRODUCTS_FAILURE1, payload: e })
  })

}
const EditSingleCart = (id, payload) => (dispatch) => {
  dispatch({ type: types.PATCH_PRODUCT_REQUEST });
  return axios.patch(`https://poised-slacks-bear.cyclic.app/geekbuying/${id}`, payload)
    .then((r) => {
      dispatch(getOneProduct(id))
      console.log(r.data)

    })
    .catch((e) => {
      dispatch({ type: types.PATCH_PRODUCT_FAILURE, payload: e })
    })
}

/****************************Admin Dashboard page actions************************** */


const getAdminProducts = (page) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST })
  return axios.get(`https://poised-slacks-bear.cyclic.app/geekbuying/homepage?page=${page}&limit=10`).then((r) => {
    dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data })
    // console.log(r)
  }).catch((e) => {
    console.log(e);
    alert("Erros in getting producst")
  })
}

const deleteAdminProducts = (id,page) => (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST })
  return axios.delete(`https://poised-slacks-bear.cyclic.app/geekbuying/${id}`).then((r) => {
    console.log(r.data)
    alert("product deleted successfully")
    dispatch(getAdminProducts(page))
  }).catch((e) => {
    alert(`${e}`)
    dispatch({ type: types.DELETE_PRODUCT_FAILURE, payload: e })
    console.log(e)
  })
}

const updateAdminProducts=(id,payload,page)=>(dispatch)=>{
  dispatch({ type: types.PATCH_PRODUCT_REQUEST });
  return axios.patch(`https://poised-slacks-bear.cyclic.app/geekbuying/${id}`, payload)
    .then((r) => {
      
   dispatch({type:types.PATCH_PRODUCT_SUCCESS,payload:r.data})
   alert("product update succeffully")
   dispatch(getAdminProducts(page));

    })
    .catch((e) => {
      dispatch({ type: types.PATCH_PRODUCT_FAILURE, payload: e })
      alert(`${e}`)
    })
}

const addNewProducts=(payload,page)=>(dispatch)=>{
  dispatch({type:types.ADD_PRODUCT_REQUEST})
  return axios.post(`https://poised-slacks-bear.cyclic.app/geekbuying`,payload).then((r)=>{
 alert("product added succeeffully")
 dispatch({type:types.ADD_PRODUCT_SUCCESS})
  })
  .catch((e)=>{
    alert(`${e}`)
    dispatch({type:types.ADD_PRODUCT_FAILURE})
  })
}


export { getData, EditCart, getOneProduct, EditSingleCart, getAdminProducts, deleteAdminProducts,updateAdminProducts ,addNewProducts}