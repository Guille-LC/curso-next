'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic'; // 👈 esto lo soluciona

export default function SuccessPage() {

 const params = useSearchParams();

 const orderId = params.get('id');

 const router = useRouter();

 return (

  <div className="max-w-2xl mx-auto p-6 text-center">

   <h1 className="text-3xl font-bold text-green-600 mb-4">¡Gracias por tu compra!</h1>

   <p className="text-gray-700 mb-2">

    Tu orden fue generada correctamente.

   </p>

   {orderId && (

    <p className="text-sm text-gray-500 mb-6">

     ID de la orden: <span className="font-mono">{orderId}</span>

    </p>

   )}

   <button

    onClick={() => router.push('/')}

    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"

   >

    Volver al inicio

   </button>

  </div>

 );

}

/* 'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export default function SuccessPage() {
  const params = useSearchParams();
  const orderId = params.get('id');
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">¡Gracias por tu compra!</h1>
      
      <p className="text-gray-700 mb-2">
        Tu orden fue generada correctamente.
      </p>

      {orderId && (
        <p className="text-sm text-gray-500 mb-6">
          ID de la orden: <span className="font-mono">{orderId}</span>
        </p>
      )}

      <button
        onClick={() => router.push('/')}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Volver al inicio
      </button>
    </div>
  );
} */
