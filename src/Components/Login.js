import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate()

    useEffect(()=>{
        let auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })

    const handleLogin = async ()=>{
        console.log(email,password)
        let result = await fetch('http://localhost:4000/login',{
            method: 'post',
            body: JSON.stringify({email,password}),
            headers:{
                'content-Type':'application/json'
              }
        });
         
        result = await result.json();

        console.log(result);

        if( result.name){
            localStorage.setItem("user",JSON.stringify(result))
            navigate('/')
        }
        else{
           alert('Please Enter Correct details');
        }

    }

    return(
<>

<div className="flex  flex-col justify-center items-center w-full">
        <div>
          <h2 className="my-6 font-bold text-4xl text-blue-800">
            User Login
          </h2>
          
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
          <button onClick={handleLogin} className="bg-gradient-to-r from-blue-500 to-blue-800 text-white font-medium py-2 px-4 rounded-lg hover:scale-105 duration-200">
            Submit
          </button>
        </div>
      </div>
</>
        )
}

export default Login