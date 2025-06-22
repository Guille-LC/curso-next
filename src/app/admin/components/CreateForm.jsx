"use client"

import { useState } from "react"
import { handleChange } from "@/src/utils/handleChange"

export function CreateForm() {
    const [data,setData] = useState({
      title: "",
      description:"",
      price: 0,
      stock: 0,
      category:"",
      img: ""
    }
  )

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

  if(!data.title || !data.description || !data.category || !data.img) {
    alert("Completa todos los campos")
    return 
  }
  if(parseFloat(data.price) <= 0) {
    alert("El precio no debe ser nunca 0")
    return 
  }

  //POST
  const response = await fetch("http://localhost:3000/api/products", {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        ...data,
        price: parseFloat(data.price)
      })
  })

  if(!response.ok) {
    const error = await response.json();
    console.error("Error al crear el producto: ", error)
    return
  }
  
  const result = await response.json();
  console.log("Producto creado correctamente: ", result);
  setData({
    title: "",
    description:"",
    price: 0,
    stock: 0,
    category:"",
    img: ""
  })

  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={data.title}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Product Title"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        value={data.description}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="price"
        value={data.price}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Price"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="price"
        value={data.stock}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Price"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="category"
        value={data.category}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Category"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="img"
        value={data.img}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Image URL"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Crear
      </button>
    </form>
  );
}