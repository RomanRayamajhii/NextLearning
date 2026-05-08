"use client"
import {useRouter} from "next/navigation";
import { useState } from "react";
export default function CreateProduct(){
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const[loading,setLoading]=useState(false);
    const router=useRouter();

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const res=await fetch("/react-form/api",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({title,price,description})
            });
            if(res.ok){
                router.push("/product-db")
            }}
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            };
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96">
            <label className="text-mist-700">Title
                <input type="text"
                         name="title"
                         className="block w-full p-2 text-black border rounded"
                          onChange={(e)=>setTitle(e.target.value)}/>
                        </label>
                        <label htmlFor="price">
                            Price
                            <input type="number"
                            name="price"
                            className="block w-full p-2 text-black border rounded"
                            onChange={(e)=>setPrice(e.target.value)}/>
                        </label>
                        <label htmlFor="description">
                            Description
                            <textarea 
                            name="description"
                            className="block w-full p-2 text-black border rounded"
                            onChange={(e)=>setDescription(e.target.value)}/>
                            
                            </label>
                            <button
                            type="submit"
                            className="block w-full p-2 mt-5 text-white border rounded-xl bg-blue-400"
                            disabled={loading}>
                                {loading ?"submitting...":"submit "}
            </button>
        </form>
    );
}