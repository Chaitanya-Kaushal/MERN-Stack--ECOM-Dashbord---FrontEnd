import React ,{useState,useEffect} from "react";
import { useNavigate,useParams} from "react-router-dom"


const UpdateProduct = () => {
    const navigate = useNavigate()
    const param = useParams()

    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")

    useEffect(() => {
        getProductDetails();
    }, [])
   
    const getProductDetails= async ()=>{
        
            let result = await fetch(`http://localhost:4000/product/${param.id}`,{
                headers:{
                    "Content-type":"application.json"
                }
            })
            result = await result.json()
           setName(result.name)
           setPrice(result.price)
           setCategory(result.category)
           setCompany(result.company)
           
    }

    const updateProduct= async ()=>{
        let result = await fetch(`http://localhost:4000/product/${param.id}`,{
            method:'Put',
            body: JSON.stringify({name,price,category,company}),
            headers: {
                'Content-Type': 'Application/json'
            }
        }
        )
        result = await result.json()
        if(result)navigate('/')
        
    }
    

        
    


    return (
        <>
        <div className="flex  flex-col justify-center items-center w-full">
        <div>
        
          <h2 className="my-6 font-bold text-4xl text-blue-800">
            Update Product
          </h2>
          
          
          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Product Name" value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Product Price" value={price}
            onChange={(e) => setPrice(e.target.value)}
          />


          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Company name" value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          
          <input
            className="border-2 border-blue-500 block focus:outline-none  mb-4 py-2 px-6 rounded-md"
            type="text"
            placeholder="Enter Category" value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button onClick={updateProduct} className="bg-gradient-to-r from-blue-500 to-blue-800 text-white font-medium py-2 px-4 rounded-lg hover:scale-105 duration-200">
            Update Product
          </button>
        </div>
      </div>
        
        </>
    )
}

export default UpdateProduct