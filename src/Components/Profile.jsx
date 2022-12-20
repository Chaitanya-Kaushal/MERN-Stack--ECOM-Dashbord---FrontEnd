import React from 'react'
import { useEffect,useState } from 'react'


const Profile = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [userId,setUserId]=useState()

    let profile = localStorage.getItem('user')
    profile = JSON.parse(profile)
 
    console.log(profile);
    
    useEffect(()=>{
       setName(profile.name)
       setEmail(profile.email)
       setUserId(profile._id)
    },[])


  return (
    <div className='flex flex-col justify-center items-center h-[80vh] w-full bg-gray-100'>
        <div className=' w-[80%] md:w-[50%] shadow-lg flex flex-col items-center bg-white py-10 rounded-[40px]'>
            <div className='w-[70px] h-[70px] bg-gray-400 mb-4 rounded-full flex Flex-col items-center justify-center font-bold'> IMAGE </div>
            <h2 className='text-blue-500 text-lg font-bold mb-4 '>Name: <span className='text-black font-medium ml-2 text-lg  '>{name}</span> </h2>
            <h2 className='text-blue-500 text-lg font-bold mb-4 '>Email:<span className='text-black font-medium ml-2 text-lg  '>{email}</span> </h2>
            <h2 className='text-blue-500 text-lg font-bold mb-4 ' >UserID:<span className='text-black font-medium ml-2 text-lg  '>{userId}</span> </h2>
        </div>
    </div>
  )
}

export default Profile