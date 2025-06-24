import Link from "next/link";
import CartWidget from "./CartWidget";

export default function Navbar() {
    return(
    <nav className="navbar">
        <div>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10   justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2   focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"   aria-controls="navbar-default" ari-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1    7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="navflexbox">
                <li className="navbutton">
                    <Link href={"/"} aria-current="page">Home</Link>
                </li>
                <li className="navbutton">
                    <Link href={"/about"}>Bio</Link>
                </li>
                <li className="navbutton">
                    <Link href={`/products/all`}>Libros</Link>
                </li>
                <li className="navbutton">
                    <Link href={"/contact"}>Contacto</Link>
                </li>
                <li className="bg-black text-white p-4 flex justify-between items-center"> 
                    <CartWidget />
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
};