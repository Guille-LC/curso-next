import Link from 'next/link'
import Image from "next/image";
import './styles/notfound.css'

export default function NotFound() {
    return (
        <div className='notfound'>
            <h1>404 - Pagina no encontrada...</h1>
            <Image src="/klipartz.com.png" alt='404' width={400} height={300}/>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none  dark:focus:ring-blue-800"><Link href="/">Volver al Home</Link></button>
        </div>
    )
}