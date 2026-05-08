"use client"
import { getProducts } from "@/app/lib/prisma-db";
import Link from "next/link";
import { removeProduct } from "../action/product";
import { useOptimistic } from "react";
import Form from "next/form";
 export type Product={
    id:number;
    title:string;
    price:number;
    description:string|null;
  
}
export default  function ProductDetail({products}:{products:Product[]}) {
    
    const [optimisticProducts,setOptimisticProducts] =useOptimistic
    (products,(currentProducts,productId)=>{
    return currentProducts.filter((product)=>product.id!==productId)

    });
    const removeProductByID= async (productId:number)=>{
        setOptimisticProducts(productId)
        await removeProduct(productId);

    }

    return (
        <ul className="space-y-4">
            {optimisticProducts.map((product)=>(
                <li key={product.id} className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                       <Link href={`/product-db/${product.id}`}>{product.title}</Link> 
                        
                        </h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <div className="flex space-x-6">
                        <button className="text-white font-bold py-2 px-6  bg-blue-500 rounded-lg">
                        <Link href={`/product-db/${product.id}`}>Edit</Link>
                    </button>
                    <Form action={removeProductByID.bind(null,product.id)}>
                    <button className="text-white font-bold py-2 px-6  bg-red-500 rounded-lg">
                        Delete
                    </button>
                    </Form>
                    </div>
             </li> 
            ))}
        </ul>
    )
    
}