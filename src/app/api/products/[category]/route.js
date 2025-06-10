import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/src/firebase/config";

export async function GET(request, { params }) {
    const { category } = await params;

    const productsRef = collection(db, "libros");

    const q =
    category === "all"
        ? productsRef
        : query(productsRef, where("category", "==", category));

    const querySnapshot = await getDocs(q);

    const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    }));
    console.log(products);
    
    return NextResponse.json({
        products,
    });
}

export async function POST(request) {}