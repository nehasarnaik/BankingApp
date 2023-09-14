import { ADD_USER, FAIL_REQUEST, GET_USER, MAKE_REQUEST } from "./ActionType"

const initialstate={
    loading:true,
    userlist:[],
    userobj:{},
    errmessage:''
}

export const Reducer=(state=initialstate,action)=>{
    switch(action.type){
        case MAKE_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FAIL_REQUEST:
            return{
                ...state,
                loading:false,
                errmessage:action.payload
            }
        case ADD_USER:
            return{
                ...state,
                loading:false
            }
        case GET_USER:
            return{
                ...state,
                loading:false
            }
        default: return state
    }
}