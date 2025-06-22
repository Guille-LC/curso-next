'use client'

import { useState, useEffect } from "react"
import { useCartContext } from "@/src/components/context/CartContext"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCartContext()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        setTotal(newTotal)
    }, [cart])

    if (cart.length === 0) {
        return (
            <div className="text-center p-10">
                <h2 className="text-2xl font-semibold">Tu carrito está vacío</h2>
                <Link href="/products/all" className="text-blue-600 hover:underline mt-4 inline-block">Ir a productos</Link>
            </div>
        )
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
            <ul className="space-y-4">
                {cart.map((product, index) => (
                    <li key={index} className="flex items-center gap-4 border-b pb-4">
                        <Image src={product.img} alt={product.title} className="w-20 h-20 object-cover rounded" />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">{product.title}</h2>
                            <p className="text-gray-600">Precio: ${product.price}</p>
                            <p className="text-gray-600">Stock disponible: {product.stock}</p>

                            <div className="flex items-center mt-2 gap-2">
                                {/* Restar */}
                                <button onClick={() => updateQuantity(product.id, product.quantity - 1)} disabled={product.quantity === 1} className="px-2 py-1 bg-gray-200 rounded">-</button>

                                <span>{product.quantity}</span>

                                {/* Sumar */}
                                <button onClick={() => updateQuantity(product.id, product.quantity + 1)} disabled={product.quantity >= product.stock} className="px-2 py-1 bg-gray-200 rounded">+</button>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:underline">
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
                <strong className="text-xl">Total: ${total.toFixed(2)}</strong>
                <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Vaciar carrito
                </button>
                {cart.length > 0 && (
                    <div className="mt-6">
                        <Link href="/checkout">
                        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                            Finalizar compra
                        </button>
                        </Link>
                    </div>
                    )}
            </div>
        </div>
    )
}
