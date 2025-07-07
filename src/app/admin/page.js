import { ProductsTable } from "./components/ProductsTable";

export default function AdminPage() {
    return(
        <>
            <div>
                <h1>Admin section</h1>
            </div>
            <div>
                <ProductsTable />
            </div>
        </>
    )
}