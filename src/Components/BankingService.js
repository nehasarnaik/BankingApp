import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../Redux/Action";
import './script.css'

const BankingService = () => {

    const[accountNo,setAccountNo]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(GetUser(accountNo,navigate));
    }
    return ( 
    <div>
        <form onSubmit={handleSubmit}>
            <div className="card-body form_width ">
                <h5 className="top">Enter Account Number</h5>
                <div className="row">
                    <div className="col-lg-12 padding">
                        <div className="form-group">
                            <input 
                            value={accountNo}
                            onChange={e=>setAccountNo(e.target.value)}
                            className="form-control" 
                            placeholder="Account Number"></input>
                        </div>
                    </div>
                </div>
                <button className="btn btn-light button" type="submit">Submit</button>
            </div>
        </form>
    </div> 
    );
}
 
export default BankingService;