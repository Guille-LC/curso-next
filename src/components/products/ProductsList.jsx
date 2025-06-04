"use client";

export default async function ProductsList({ category }) {

    const res = await fetch(`http://localhost:3000/api/products/${category}`);
    const { products } = await res.json();

    return (
        <>
        {products.length > 0 ? (
            products.map(product => (
                <>
                    <h3 className="text-2xl font-bold text-center">
                        Productos de la categoria: {category}
                    </h3>
                    <div key={product.id}>
                        <h2 className="font-bold">{product.title}</h2>
                    </div>
                </>
            ))
        ) : (
                <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/public/booknotfound.png" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No hay productos en esta categoria...</h5>
                    </div>
                </div>
            )}
        </>
    );
}
