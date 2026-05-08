

import { getProduct } from "@/app/lib/prisma-db";
import EditProductForm from "./product-edit";

import { notFound } from "next/navigation";

export default async  function EditProductPage({params}:{params:Promise<{id:string}>}){
    const id=(await params).id;
    const product = await getProduct(parseInt(id));
   if(!product){
    notFound()
   }
  
  return <EditProductForm product={product}/>



}