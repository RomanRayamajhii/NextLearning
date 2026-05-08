import Form from "next/form"
export const Search=()=>{
    return (
        <Form action="/product-db" className="flex gap-2 ">

            <input type="search" name="query" 
            placeholder="Search products"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-500 focus:outline-none"/>
        <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            Search
        </button>
         
        </Form>
    )

}