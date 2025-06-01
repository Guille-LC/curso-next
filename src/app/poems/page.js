import '../styles/poems.css'

export default async function() {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
        revalidate: 60
        },
        cache: "default"
    })
    
    const posts = await data.json();

    return(
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <p href={`/posts/${post.id}`}>{post.title}</p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

{/* <h2 className='poemtitle'>Versos a Medianoche</h2>
            <p className='verse'>
                En la tinta callada de un sueño sin fin,<br />
                navega la luna, dibuja el jardín.<br />
                Susurra el silencio lo que nadie oyó,<br />
                y el alma despierta donde el tiempo durmió.
            </p>
            <p className='verse'>
                Un eco lejano se cuela en mi voz,<br />
                buscando respuestas que invente el adiós.<br />
                Pero en cada sombra renace un color,<br />
                y en cada palabra, un pedazo de amor.
            </p>
            <h2 className='poemtitle'>La noche respira</h2>
            <p className='verse'>
                La noche respira detrás del cristal,<br />
                su aliento es de estrellas y de sombra total.<br />
                Silencio que canta, sin voz ni color,<br />
                y envuelve los sueños con leve temblor.
            </p>
            <h2 className='poemtitle'>Marea de adentro</h2>
            <p className='verse'>
                Hay una marea que nunca se ve,<br />
                crece en el pecho, no en el café.<br />
                Arrastra recuerdos, los lanza al azar,<br />
                espuma de historias que no van a estar.
            </p>
            <h2 className='poemtitle'>Otoño en pausa</h2>
            <p className='verse'>
                Caen las hojas sin pedir perdón,<br />
                como quien ama sin explicación.<br />
                El viento las mece, les da dirección,<br />
                y el tiempo se esconde tras cada rincón.
            </p> */}