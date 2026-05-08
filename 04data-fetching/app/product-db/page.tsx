import { getProducts } from "@/app/lib/prisma-db";
import ProductDetail from "./product-details"

 export type Product={
    id:number;
    title:string;
    price:number;
    description:string|null;
  
}
export default async function ProductDbPage({searchParams}:
    {searchParams:Promise<{query:string}>}) {
        const {query}=await searchParams;
    

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const products:Product[] =await getProducts(query);
    return <ProductDetail products={products}/>
}