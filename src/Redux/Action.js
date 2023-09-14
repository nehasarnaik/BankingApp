import axios from "axios"
import { ADD_USER, GET_USER,FAIL_REQUEST, MAKE_REQUEST } from "./ActionType"
import { toast } from "react-toastify"


export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}

export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}

export const addUser=()=>{
    return{
        type:ADD_USER
    }
}
   
export const getUser=()=>{
    return{
        type:GET_USER
    }
}

export const RegisterUser=(data)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.post('http://localhost:4000/user',data).then(res=>{
            const userlist=res.data;
            dispatch(addUser());
            //toast.success('Registration Successfull')
            toast.success('Registration Successfull !', {
                position: toast.POSITION.BOTTOM_CENTER,
                progressStyle: { background: ' #597268'},
                style: { color: '#597268' },
            });
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const GetUser=(accountNumber,navigate)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:4000/user?accountNo='+accountNumber).then(res=>{
            console.log(res.data);
            
            if(res.data.length===0){
                navigate('/bankingService');
                toast.info('Account number is not registered', {
                        position: toast.POSITION.BOTTOM_CENTER,
                        progressStyle: { background: ' #597268'},
                        style: { color: '#597268' },
                    });
            }
            else{
                navigate('/dashboard');
            }
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}