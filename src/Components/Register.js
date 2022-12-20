import React,{useEffect} from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  })
  
 const getData= async ()=>{
  console.warn(name,email,password);
   let result = await fetch('http://localhost:4000/register', {
    method:'post',
    body: JSON.stringify({name,email,password}),
    headers:{
      'content-Type':'application/json'
    }
   });
   result = await result.json();
console.log(result);
localStorage.setItem("user",JSON.stringify(result))
navigate('/')

    
 }

  return (
    <>
      <div className="flex  flex-col justify-center items-center w-full h-[80vh]">
        <div>
          <h2 className="my-6 font-bold text-4xl text-blue-800">
            User Registration
          </h2>
          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Your Name" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Email" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={getData} className="bg-gradient-to-r from-blue-500 to-blue-800 text-white font-medium py-2 px-4 rounded-lg hover:scale-105 duration-200">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
