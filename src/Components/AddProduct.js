import React ,{useState} from "react";
import {useNavigate} from "react-router-dom"


const AddProduct = ()=>{
  const navigate = useNavigate()

    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const [error,setError]= useState(false)


    const handleAddProduct=async ()=>{
        if(!name || !price || !category || !company){
            setError(true)
            return false
        }

        console.log(name,company,price,category);
        let userid = JSON.parse(localStorage.getItem('user'))._id;
        let result =await fetch('http://localhost:4000/addproduct',{
            method:'post',
            body: JSON.stringify({name,userid,category,price,company}),
            headers:{
                "Content-Type":"application/json"
            }
        });
         result = await result.json()
         console.log(result);
        navigate('/')
    }


    return (
        <>
        <div className="flex  flex-col justify-center items-center w-full h-[80vh] ">
        <div className="">
          <h2 className="my-6 font-bold text-4xl text-blue-800">
            Add Product
          </h2>
          
          {error && !name && <span className='mb-2 text-red-600'>Enter valid name</span>}
          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Product Name" value={name}
            onChange={(e) => setName(e.target.value)}
          />

            {error && !price && <span className='mb-2 text-red-600'>Enter price</span>}
          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Product Price" value={price}
            onChange={(e) => setPrice(e.target.value)}
          />


            {error && !company && <span className='mb-2 text-red-600'>Enter Company Name</span>}
          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Company name" value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          
            {error && !category && <span className='mb-2 text-red-600'>Enter Category Name</span>}
          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Category" value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button onClick={handleAddProduct} className="bg-gradient-to-r from-blue-500 to-blue-800 text-white font-medium py-2 px-4 rounded-lg hover:scale-105 duration-200">
            Add Product
          </button>
        </div>
      </div>
        
        </>
    )
}

export default AddProduct;