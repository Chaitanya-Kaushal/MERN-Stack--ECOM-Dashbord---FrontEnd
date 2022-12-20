import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let result = await fetch("http://localhost:4000/products", {
      headers: {
        "Content-type": "application.json",
      },
    });
    result = await result.json();
    setProduct(result);
  };

  const deleteProduct = async (id) => {
    console.log(id);
    let result = await fetch(`http://localhost:4000/product/${id}`, {
      method: "Delete",
    });
    if (result) {
      getProduct();
    }
  };

  const updateProduct = (id) => {
    navigate(`/update/${id}`);
  };

  const searchProduct = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:4000/search/${key}`);
      result = await result.json();
      if (result) {
        setProduct(result);
      }
    } else {
      getProduct();
    }
  };

  return (
    <>
      <h2 className=" p-4 font-bold text-4xl text-blue-800">Product List</h2>
      <div className="w-full h-full flex flex-col justify-center items-center mb-10">
        <div>
          <input
            onChange={searchProduct}
            type="text"
            className="border-2 border-blue-500 py-3 px-12  my-4 outline-none rounded-md"
            placeholder=" Search Products"
          />

          <table>
            <thead>
              <tr>
                <th className=" border-2 border-blue-600 p-1">S.NO.</th>
                <th className=" border-2 border-blue-600 p-1">Name</th>
                <th className=" border-2 border-blue-600 p-1">Price</th>
                <th className=" border-2 border-blue-600 p-1">Company</th>
                <th className=" border-2 border-blue-600 p-1">Category</th>
                <th className=" border-2 border-blue-600 p-1">Operation</th>
              </tr>
            </thead>
            <tbody>
              {product.length ? (
                product.map((item, index) => (
                  <tr key={item._id}>
                    <td className=" border-2 border-blue-600 p-1">
                      {index + 1}
                    </td>
                    <td className=" border-2 border-blue-600 p-1">
                      {item.name}
                    </td>
                    <td className=" border-2 border-blue-600 p-1">
                      {item.price}
                    </td>
                    <td className=" border-2 border-blue-600 p-1">
                      {item.company}
                    </td>
                    <td className=" border-2 border-blue-600 p-1">
                      {item.category}
                    </td>
                    <td className=" border-2 border-blue-600 p-1">
                      <button
                        className="bg-red-400 rounded-md p-1 ml-1"
                        onClick={() => deleteProduct(item._id)}
                      >
                        Delete
                      </button>
                      <Link
                        onClick={() => updateProduct(item._id)}
                        to={`/update/${item._id}`}
                        className="bg-blue-400 rounded-md p-1 ml-2"
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-red-500 font-bold text-4xl">
                  NO Product Found !!!!
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Product;
