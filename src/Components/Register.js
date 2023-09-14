import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../Redux/Action";
import './script.css'

const Register = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[accountNo,setAccountNo]=useState('');
    const[mobile,setMobile]=useState('');
    const[dob,setDoB]=useState('');
    const[address,setAddress]=useState('');
    const[aadhar,setAadhar]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const userobj={name,email,accountNo,mobile,dob,address,aadhar};
        console.log(userobj);
        dispatch(RegisterUser(userobj));
        navigate('/');
    }
    return ( 
    <div>
        <form onSubmit={handleSubmit}>
            <div className="card-body form_width ">
                <h2 className="top">Registration</h2>
                <div className="row">
                    <div className="col-lg-12 padding">
                        <div className="form-group">
                            <input 
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            className="form-control" 
                            placeholder="Name"></input>
                        </div>
                    </div>
                    <div className="col-lg-12 padding">
                        <div className="form-group">
                            <input 
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            className="form-control" 
                            placeholder="Email ID"></input>
                        </div>
                    </div>
                    <div className="col-lg-12 padding">
                        <div className="form-group">
                            <input 
                            value={accountNo}
                            onChange={e=>setAccountNo(e.target.value)}
                            className="form-control" 
                            placeholder="Account Number"></input>
                        </div>
                    </div>
                    <div className="col-lg-12 padding">
                        <div className="form-group">
                            <input 
                            value={mobile}
                            onChange={e=>setMobile(e.target.value)}
                            className="form-control" 
                            placeholder="Mobile Number"></input>
                        </div>
                    </div>
                    <div className="col-lg-12 padding">
                        <div className="form-group">
                            <input 
                            value={dob}
                            onChange={e=>setDoB(e.target.value)}
                            className="form-control" 
                            placeholder="Date of Birth"></input>
                        </div>
                    </div>
                    <div className="col-lg-12 padding">
                        <div className="form-group">
                            <input 
                            value={address}
                            onChange={e=>setAddress(e.target.value)}
                            className="form-control" 
                            placeholder="Address"></input>
                        </div>
                    </div>
                    <div className="col-lg-12 padding">
                        <div className="form-group">
                            <input 
                            value={aadhar}
                            onChange={e=>setAadhar(e.target.value)}
                            className="form-control" 
                            placeholder="Aadhar Number"></input>
                        </div>
                    </div>
                </div>
                <button className="btn btn-light button" type="submit">Submit</button>
            </div>
        </form>
    </div> 
    );
}
 
export default Register;