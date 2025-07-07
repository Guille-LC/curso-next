import { CreateForm } from "../components/CreateForm"
import '@/src/app/styles/admin.css'

export default function CreatePage() {
    return(
        <div className="admin">
            <h1>Crear Libro</h1>
            <p>Aca se puede crear un nuevo libro para el sitio:</p>
            <CreateForm />
        </div>
    )
}