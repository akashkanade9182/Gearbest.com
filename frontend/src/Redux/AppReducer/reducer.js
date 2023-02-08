

import * as types from "./actionType"


const initialState = {
  products: [],
  data: {},
  cart: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state, isLoading: true
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state, isLoading: false,
        isError: false,
        products: payload
      }
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state, isLoading: false,
        products: [],
        isError: true
      }
    case types.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      
      }
    case types.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isError: true,

      }
    case types.EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.EDIT_PRODUCT_SUCCESS:
      return {
        ...state, isLoading: false,
        isError: false,
        cart: payload
      }
    case types.EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        isError: true,

      }
    case types.PATCH_PRODUCT_REQUEST:
      return {
        ...state, isLoading: true,

      }
    case types.PATCH_PRODUCT_SUCCESS:
      return {
        ...state, isLoading: false,
       

      }
    case types.PATCH_PRODUCT_FAILURE:
      return {
        ...state, isError: true


      }
    case types.GET_PRODUCTS_REQUEST1:
      return {
        ...state, isLoading: true


      }
    case types.GET_PRODUCTS_SUCCESS1:
      return {
        ...state, isLoading: false,
        data: payload,
        isError: false


      }
    case types.GET_PRODUCTS_FAILURE1:
      return {
        ...state, isLoading: false,
        data: {},
        isError: true


      }
    case types.DELETE_PRODUCT_REQUEST:
      return {
        ...state, isLoading: true,

        isError: false


      }
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state, isLoading: false,

        isError: false


      }
    case types.DELETE_PRODUCT_FAILURE:
      return {
        ...state, isLoading: false,

        isError: true


      }
    







    default: return state;
  }

};


export { reducer }