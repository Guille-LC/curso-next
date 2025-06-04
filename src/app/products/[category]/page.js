import ProductsList from '@/src/components/products/ProductsList'
import Link from "next/link";

export async function generateMetadata({params,searchParams},parent) { 
    return{
        title:`Catalina Posdeley - ${params.category}`,
        description:`Libros de ${params.category}, Catalina Posdeley`
    }
}

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
    
    const { category } = params;

    return(
        <div>
            <h3 className="text-2xl font-bold text-center">
                Productos de la categoria: {category}
            </h3>
            <div>
                <Link href={"/products/all"}>Todos</Link>
                <Link href={"/products/ficcion"}>ficcion</Link>
                <Link href={"/products/no-ficcion"}>no-ficcion</Link>
                <Link href={"/products/poesia"}>poesia</Link>
                <Link href={"/products/biografia"}>biografia</Link>
            </div>
            
            <ProductsList category={category} />
        </div>
    )
}
