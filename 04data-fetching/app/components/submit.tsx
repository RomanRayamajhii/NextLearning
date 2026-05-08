"use client"
import {useFormStatus} from "react-dom"
export const Submit=()=>{
    const {pending}=useFormStatus();
    return <button type="submit" className="w-full text-2xl bg-green-600 px-4 mt-4 rounded-md hover:bg-green-900 text-white disabled:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50" disabled={pending} >Submit</button>
    


}