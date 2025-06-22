'use client';

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/src/firebase/config";
import { useEffect, useState } from "react";
import { useCartContext } from "@/src/components/context/CartContext";
import Image from "next/image";

export const metadata = {
  title: "Catalina Posdeley",
  description: `Detalles del libro ${id.title}`,
  keywords: ['poesia', 'ficcion','literatura','novela']
};

export default function ProductDetail({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "libros", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="p-6">Producto no encontrado.</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <Image
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mb-4"
        src={product.img}
        alt={product.title}
      />
      <p className="text-gray-700 mb-2">
        <strong>Categoría:</strong> {product.category}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Precio:</strong> ${product.price}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Descripción:</strong> {product.description}
      </p>

      {/* Counter */}
      <div className="flex items-center gap-4 mb-4">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}
        >
          -
        </button>
        <span className="text-xl font-bold">{quantity}</span>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => setQuantity(q => q < product.stock ? q + 1 : q)}
        >
          +
        </button>
        <span className="text-sm text-gray-500">Stock disponible: {product.stock}</span>
      </div>

      {/* Add to cart */}
      <button
        onClick={() => addToCart({ ...product, quantity })}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
