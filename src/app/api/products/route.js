import { db } from "@/src/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();

    const {title,description,category,img,price} = body

    if(!title || !description || !category || !img) {
        return NextResponse.json(
            {error: "Completa todos los campos"},
            {status:400}
        )
    }
    if(price <= 0) {
        return NextResponse.json(
            {error: "El precio debe ser mayor a cero"},
            {status:400}
        )
    }

    try {
        const docRef = await addDoc(collection(db, "libros"), {
            title,
            description,
            price: parseFloat(price),
            category,
            img,
        });
        return NextResponse.json(
            {message: "Producto creado exitosamente: ", id:docRef.id},
            {status: 201}
        )
    } catch (error) {
        return NextResponse.json(
            {error: "Algo salio mal"},
            {status: 500}
        )
    }
}