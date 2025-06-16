import { doc, getDoc } from "firebase/firestore";
import { db } from "@/src/firebase/config";

export default async function ProductDetail({ params }) {
  const { id } = params;

  const docRef = doc(db, "libros", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <p>Producto no encontrado.</p>;
  }

  const product = docSnap.data();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={product.img} alt={product.title} />
      <p className="text-gray-700 mb-2"><strong>Categoría:</strong> {product.category}</p>
      <p className="text-gray-700 mb-2"><strong>Precio:</strong> ${product.price}</p>
      <p className="text-gray-700"><strong>Descripción:</strong> {product.description}</p>
    </div>
  );
}
