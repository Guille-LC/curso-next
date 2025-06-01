import { NextResponse } from "next/server"
import { productsDB } from "/prods";

export async function GET(request) {

    setTimeout(() => {
        return NextResponse.json({
            prod : productsDB
        })
    }, 2000);
    
}
