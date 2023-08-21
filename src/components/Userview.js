import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Userview = () => {
    const [user, Setuser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const { _id } = useParams();

    const result = async () => {
        const resp = await axios.get(`http://localhost:4000/user/view/${_id}`);
        console.log(resp.data.data, "14")
        Setuser(resp.data.data)
    }
    useEffect(() => {
        result()
    }, [])
    return (
        <div>
        <h1 className='text-center m-5'>User Id is:  {user._id}</h1>
            <ul class="list-group w-50 m-auto mt-4">
                <li class="list-group-item">User Name is: <b className='text-primary'>{user.name}</b></li>
                <li class="list-group-item">User Email is: <b className='text-primary'>{user.email}</b></li>
            </ul>
        </div>
    )
}

export default Userview
