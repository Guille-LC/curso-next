'use client';

import { db } from '@/src/firebase/config';
import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { useCartContext } from '@/src/components/context/CartContext';
import { useState } from 'react';

export default function CheckoutPage() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCartContext();
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleOrder = async () => {
        if (!customer.name || !customer.email || !customer.phone) {
        alert('Completá los datos del cliente');
        return;
    }
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    try {
        for (const item of cart) {
        const snap = await getDoc(doc(db, 'libros', item.id));
        if (item.quantity > snap.data().stock) {
            alert(`No hay suficiente stock para "${item.title}". Disponible: ${snap.data().stock}`);
            return;
        }
        }
        const order = {
        buyer: customer,
        items: cart.map(({ id, title, price, quantity }) => ({ id, title, price, quantity })),
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        };
        const docRef = await addDoc(collection(db, 'orders'), order);
        for (const item of cart) {
        await updateDoc(doc(db, 'libros', item.id), {
            stock: item.stock - item.quantity,
        });
        }
        clearCart();
        alert(`Orden generada correctamente. ID: ${docRef.id}`);
    } catch (error) {
        console.error(error);
        alert('Ocurrió un error al generar la orden');
    }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Resumen de compra</h1>

        {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
        ) : (
            <div className="space-y-4">
            {cart.map((item) => (
                <div key={item.id} className="border rounded p-4 flex justify-between items-center">
                <div>
                    <h2 className="font-bold">{item.title}</h2>
                    <p>Categoría: {item.category}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                </div>
                <div className="space-x-2">
                    <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>

                    <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, Math.min(item.quantity + 1, item.stock))}>+</button>

                    <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
                </div>
            ))}
            </div>
        )}

        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Datos del cliente</h2>
            <input type="text" name="name" placeholder="Nombre" value={customer.name} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
            <input type="email" name="email" placeholder="Email" value={customer.email} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
            <input type="tel" name="phone" placeholder="Teléfono" value={customer.phone} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
        </div>

        <button onClick={handleOrder} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Confirmar compra
        </button>
        </div>
    );
}
