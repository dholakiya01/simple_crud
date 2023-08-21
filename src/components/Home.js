import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {
  const [user, setusers] = useState([]);

  const usersdata = async () => {
    const result = await axios.get('http://localhost:4000');
    console.log(result.data.data);
    setusers(result.data.data.reverse())
  }

  useEffect(() => {
    usersdata()
  }, []);

  const deleteuser = async(_id)=>{
    const result = await axios.delete(`http://localhost:4000/remove/${_id}`);
    usersdata()
    console.log(result.data);

  }


  return (
    <div className=' container'>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quod minus! Eaque earum vero ratione sit voluptas eius alias ipsam.</p>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th >Id</th>
            <th >Name</th>
            <th >Email</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((item, index) => (
              <tr key={index}>
                <td >{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                {console.log(user._id,"dsad")}
                  <Link className="btn btn-primary mx-2"  to={`/user/view/${item._id}`}> View</Link>
                  <Link className="btn btn-warning mx-2"  to={`/user/update/${item._id}`}>Update</Link>
                  <Link className="btn btn-danger" onClick={()=>deleteuser(item._id)}>Delete</Link>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Home;
