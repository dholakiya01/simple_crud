import React from 'react'
import { Link } from 'react-router-dom';

const Not_found = () => {
  return (
    <div className='bg-danger not-found'>
     <h1>Page Not Found  &nbsp; :)</h1>
     <div>

     <Link to="/">back to Home</Link>
     </div>
    </div>
  )
}

export default Not_found;
