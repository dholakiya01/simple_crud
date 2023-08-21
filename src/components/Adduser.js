import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Adduser = () => {    
    const [user, Setuser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = user

    let router = useNavigate();

    const onInputchange = (e) => {
        Setuser({ ...user, [e.target.name]: e.target.value })
        console.log(e.target.value)
    }

    const onformsubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/create', user);
        console.log(e.target.value);
        router("/")

    }

    return (
        <div className='size'>
            <h1 className='text-center mt-3 mb-3'>Add User</h1>
            <form onSubmit={(e) => onformsubmit(e)}>
                <div className="mb-2">
                    <label for="exampleInputEmail1" className="form-label" >Name</label>
                    <input type="text" className="form-control" placeholder='Enter Your Name' name='name'
                        value={name} onChange={e => onInputchange(e)}
                    />
                </div>
                <div className="mb-2">
                    <label for="exampleInputEmail1" className="form-label" >Email address</label>
                    <input type="email" placeholder='Enter Your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'
                        value={email} onChange={e => onInputchange(e)}
                    />
                </div>
                <div className="mb-2">
                    <label for="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' name='password'
                        value={password} onChange={e => onInputchange(e)}
                    />
                </div><br />
                <button class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Adduser
