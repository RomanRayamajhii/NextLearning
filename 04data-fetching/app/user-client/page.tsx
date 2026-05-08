'use client'
import { useState, useEffect} from "react";
type User={
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
};
export default function UserClient(){
    const [users,setUsers]=useState<User[]>([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");

    useEffect(()=>{
        async function fetchData(){
            try{
                const res=await fetch("https://jsonplaceholder.typicode.com/users");
                if(!res.ok){
                    throw new Error("Network response was not ok");
                }
                
                const data=await res.json();
                setUsers(data);
            }
            catch(err){
                if(err instanceof Error){
                setError(err.message);
                }
                else{
                    setError("An unknown error occurred");
                
                }

            }
            finally{
                  setLoading(false);
            }

        }
        fetchData();
    },[]);
    if(loading){
        return <div>Loading...</div>;
    }
    if(error){
        return <div>Error:{error}</div>;
    }
    return(
        <ul className="p-4">
            {users.map((user)=>(
                <li key={user.id} className="px-4 shadow-md shadow-blue-200 rounded-xl py-6 mt-6 bg-white text-gray-700">
                    
                    <div className="font-bold">
                        {user.name}


                    </div>
                   <div className="mt-2 text-sm">
                     <div>
                        {user.username}
                    </div>
                    
                    <div>
                        {user.email}
                    </div>
                    <div>
                        {user.phone}
                    </div>
                   </div>
                </li>
            ))}
        </ul>
    )


    
              


}