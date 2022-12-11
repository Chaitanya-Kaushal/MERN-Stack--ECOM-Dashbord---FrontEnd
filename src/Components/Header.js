import React from "react";
import {Link,useNavigate} from 'react-router-dom'

const Header = () => {

const navigate = useNavigate()

let auth = localStorage.getItem('user')


const  logout=()=>{
 localStorage.clear()
 navigate('/')
}

  return (
    <>
      <ul className="flex justify-center bg-gradient-to-r from-blue-500 to-blue-800 w-full py-6 text-white text-lg font-bold">
        
        <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200"><Link to='/'>Products</Link></li>
        <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200"><Link to='/Add'> Add Products</Link>  </li>
        <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200"><Link to='/Update/:id'>Update Products</Link> </li>
        <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200"><Link to='/Profile'>Profile</Link>  </li>
        
        
        {
          auth ? 
          <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200"> <Link onClick={logout} to='/register'>Logout</Link></li>
          :
          <>
          <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200"> <Link to='/register'>SignUp</Link></li>
          <li className="mx-6 cursor-pointer hover:text-gray-300 duration-200"> <Link to='/login'>Login</Link></li>
          </>
        }
        
      </ul>
    </>
  )
}

export default Header;
