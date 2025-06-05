import ProductsList from '@/src/components/products/ProductsList'
import Link from "next/link";
import '@/src/app/styles/categorybutton.css'

export const metadata = {
    title: 'Catalina Posdeley - Productos',
    description: 'Catálogo completo de libros de Catalina Posdeley - Ficción, No Ficción, Poesía y Biografía'
}

export default async function ProductsPage() {
    
    return(
        <div>
            <h1 className="text-3xl font-bold text-center mb-4">
                Catálogo de Productos
            </h1>
            <p className="text-center text-gray-600 mb-6">
                Explora nuestra colección completa de libros de Catalina Posdeley
            </p>
            
            {/* Misma botonera que en las subcategorías */}
            <div className='categorybutton'>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/all"}>Todos</Link>
                </button>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/ficcion"}>Ficción</Link>
                </button>
                <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/no-ficcion"}>No Ficción</Link>
                </button>
                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/poesia"}>Poesía</Link>
                </button>
                <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={"/products/biografia"}>Biografía</Link>
                </button>
            </div>
            
            {/* Mostrar todos los productos sin filtro específico */}
            <ProductsList category="all" />
        </div>
    )
}