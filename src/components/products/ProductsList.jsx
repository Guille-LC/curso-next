import '@/src/app/styles/products.css'
import Link from 'next/link';

export default async function ProductsList({ category }) {

    const res = await fetch(`http://localhost:3000/api/products/${category}`);
    const { products } = await res.json();

    return (
        <>
        {products.length > 0 ? (
    <div className="flexProds">
        {products.map(product => (
            <a
                key={product.id}
                href="#"
                className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={product.img}
                    alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {product.title}
                    </h2>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {product.category}
                    </p>
                    <strong className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {product.price}
                    </strong>
                    <Link
                        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-block"
                        href={`/products/detail/${product.id}`}
                    >
                        Ver detalle
                    </Link>
                </div>
            </a>
        ))}
    </div>
) : (
                <div href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/public/booknotfound.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No hay productos en esta categoria...</h5>
                    </div>
                </div>
            )}
        </>
    );
}
