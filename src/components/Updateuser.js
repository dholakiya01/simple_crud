import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Updateuser = () => {
    const [user, Setuser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const router = useNavigate()

    const { name, email, password } = user;
    let { _id } = useParams()

    const onInputchange = (e) => {
        Setuser({ ...user, [e.target.name]: e.target.value })
        console.log(e.target.value)
    };



    const loaduser = async () => {
        const result = await axios.get(`http://localhost:4000/user/view/${_id}`)
        console.log(result.data.data, " view")
        Setuser(result.data.data)
    }

    useEffect(() => {
        loaduser()
        // Onsubmit()
    }, [])

    const onformsubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:4000/update/${_id}`, user);
        console.log(e.target.value);
        router("/")
    }
    return (
        <div className='size'>
            <h1 className='text-center mt-3 mb-3'>Update User</h1>
            <form onSubmit={onformsubmit} >
                <div className="mb-2">
                    <label for="exampleInputEmail1" className="form-label ">Name</label>
                    <input type="text" className="form-control" placeholder='Enter Your Name' name='name' value={name} onChange={e => onInputchange(e)} />
                </div>
                <div className="mb-2">
                    <label for="exampleInputEmail1" className="form-label" >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' name='email' value={email}
                        onChange={e => onInputchange(e)} />

                </div>
                <div className="mb-2">
                    <label for="exampleInputPassword1" className="form-label" >Password</label>
                    <input placeholder='Enter Your Password' type="password" name='password' className="form-control" id="exampleInputPassword1" value={password}
                        onChange={e => onInputchange(e)}
                    />
                </div><br />
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Updateuser
