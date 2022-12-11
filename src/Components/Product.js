import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    const [product,setProduct]= useState([])

    useEffect(()=>{
            getProduct()
    },[])

    const getProduct = async ()=>{

        let result = await fetch("http://localhost:4000/products",{
            headers:{
                "Content-type":"application.json"
            }
        })
        result = await result.json()
        setProduct(result)
    }

    const deleteProduct= async(id) =>{
        let result = await fetch(`http://localhost:4000/product/${id}`,{
            method: "Delete"
        });
        if(result){
            getProduct()
        }
    }



  return (
    <>
    <h2 className="my-6 font-bold text-4xl text-blue-800">
            Product List
          </h2>
    <div className='w-[80%] mx-auto'>
    <table>
        <thead>
            <tr>
                <th className=' border-2 border-blue-600 p-1'>S.NO.</th>
                <th className=' border-2 border-blue-600 p-1'>Name</th>
                <th className=' border-2 border-blue-600 p-1'>Price</th>
                <th className=' border-2 border-blue-600 p-1'>Company</th>
                <th className=' border-2 border-blue-600 p-1'>Category</th>
                <th className=' border-2 border-blue-600 p-1'>Operation</th>
            </tr>
        </thead>
        <tbody>
        {
            product.map((item,index)=>
            (
                <tr key={item._id} >
                    <td className=' border-2 border-blue-600 p-1'>{index+1}</td>
                    <td className=' border-2 border-blue-600 p-1'>{item.name}</td>
                    <td className=' border-2 border-blue-600 p-1'>{item.price}</td>
                    <td className=' border-2 border-blue-600 p-1'>{item.company}</td>
                    <td className=' border-2 border-blue-600 p-1'>{item.category}</td>
                    <td className=' border-2 border-blue-600 p-1'>
                        <button className='bg-blue-400 rounded-md p-1 ml-1' 
                        onClick={() => deleteProduct(item._id)}>Delete</button>
                        <Link to={`/update/${item._id}`} className='bg-blue-400 rounded-md p-1 ml-1'> Update</Link>
                    </td>
                </tr>
            ))
        }

        </tbody>
    </table>
    </div>

    
    </>
  )
}

export default Product