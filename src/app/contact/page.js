"use client";

import '../styles/form.css'

export default function contactForm() {
    return(
        <>
        <h2>Subscribite a mi newsletter</h2>
          <form className="form">
            <div>
              <label for="name">Nombre y apellido:</label>
              <input className='input' type="text" id="name" name="name" required/>
            </div>
            <div>
              <label for="email">Email:</label>
              <input className='input' type="email" id="email" name="email" required />
            </div>
            <div>
              <label for="message">Mensaje:</label>
              <textarea className='input' id="message" name="message" rows="5"></textarea>
            </div>
            <button type="submit button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Enviar</button>
          </form>
        </>
    )
} 