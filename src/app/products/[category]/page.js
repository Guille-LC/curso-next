import { Suspense } from 'react';
import ProductsList from '@/src/components/products/ProductsList'
import Link from "next/link";
import '@/src/app/styles/categorybutton.css'


export function generateStaticParams() {
  return [
    { category: "all" },
    { category: "ficcion" },
    { category: "no-ficcion" },
    { category: "poesia" },
    { category: "biografia" },
  ];
}

export default async function Productos ({params}) {
    
    const { category } = await params;

    return(
        <div>
            <h3 className="text-2xl font-bold text-center">
                Productos de la categoria: {category}
            </h3>
            <div className='categorybutton'>
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/all"}>Todos</Link>
                </button>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/ficcion"}>Ficcion</Link>
                </button>
                <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/no-ficcion"}>No Ficcion</Link>
                </button>
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/poesia"}>Poesia</Link>
                </button>
                <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/biografia"}>Biografia</Link>
                </button>
            </div>
            <Suspense fallback={<h1>Cargando...</h1>}>
                <ProductsList category= {category} /> 
            </Suspense>
        </div>
    )
}
