"use client"
import Link from "next/link";
import{FormState,editProduct} from "@/app/action/product"

import { Submit } from "@/app/components/submit";
import { useActionState } from "react";

import { Product } from "@/app/product-db/page";
import Form from "next/form";


export default  function EditProductForm({product}:{product:Product}){
  
    const initialState:FormState={
        errors:{}
    }
    const editProductWithID=editProduct.bind(null,product.id);
    const [state,formAction] = useActionState(editProductWithID,initialState);

  
     return (
        <Form action={formAction} className="p-4 space-y-4 max-w-96">
           <div>
   <label className="text-mist-700">Title
                <input type="text"
                         name="title"
                         className="block w-full p-2 text-black border rounded"
                         defaultValue={product.title}
                          

                         />
                        </label>
                        {state.errors.title && (
                            <p className="text-red-500">{state.errors.title}</p>
                        )}
            </div>
            <div>
  <label htmlFor="price">
                            Price
                            <input type="number"
                            name="price"
                            className="block w-full p-2 text-black border rounded"
                            defaultValue={product.price}
                           
                />
                        </label>
                        {state.errors.price && (
                            <p className="text-red-500">{state.errors.price}</p>
                        )}
            </div>
         
                      
                       <div>
                         <label htmlFor="description">
                            Description
                            <textarea 
                            name="description"
                            className="block w-full p-2 text-black border rounded"
                            defaultValue={product.description ?? " "}
                           
                        />
                            
                            </label>
                            {state.errors.description && (
                            <p className="text-red-500">{state.errors.description}</p>
                        )}
                       </div>
                         
                            <Submit/>

            <Link href="/product-db" className="text-blue-500">
                View Products

            </Link>
        </Form>
    );

}