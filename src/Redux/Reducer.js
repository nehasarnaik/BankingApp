
import {
  ADD_USER,
  FAIL_REQUEST,
  MAKE_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  GET_USER
} from "./ActionType";


const initialstate = {
  loading: true,
  userlist: [],
  userobj: {},
  errmessage: "",
};

export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmessage: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userobj: action.payload,
        loading: false,
        errmessage: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        userobj: {},
        loading: false,
        errmessage: action.payload,
      };
      case GET_USER:
           return{
                ...state,
                loading:false
            }
        
        default: return state
    }
}
