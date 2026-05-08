"use client"
import Link from "next/link";
import{FormState,createProduct} from "@/app/action/product"

import { Submit } from "../components/submit";
import { useActionState } from "react";
import { useState } from "react";

export default function CreateProductPage(){
    const initialState:FormState={
        errors:{}
    }
    const [state,formAction] = useActionState(createProduct,initialState);
  
     return (
        <form action={formAction} className="p-4 space-y-4 max-w-96">
            <div>
   <label className="text-mist-700">Title
                <input type="text"
                         name="title"
                         className="block w-full p-2 text-black border rounded"
                          

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
        </form>
    );

}