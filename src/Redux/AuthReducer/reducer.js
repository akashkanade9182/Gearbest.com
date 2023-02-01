import * as types from "./actionTypes"



const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
  usertype:""
};

const reducer = (state = initialState,action) => {
  const {type,payload}=action;
  switch(type)
  {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth:false,
        isLoading:true
      };
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          isLoading:false,
          isAuth:true,
          token:payload.token,
          usertype:payload.usertype,
          isError:false

        };
        case types.LOGIN_FAILURE:
          return {
            isAuth:false,
            isLoading:false,
            isError:true,
            token:""
          }
    default:return state;
  }
 
};

export { reducer };
