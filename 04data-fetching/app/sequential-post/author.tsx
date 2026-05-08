type Author={
    id:number;
    name:string;
}
export async function Author({
    userId}:{userId:number})
 {
     await  new Promise  ((resolve)=>setTimeout(resolve,2000));
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data:Author=await res.json();
    return (
        <div className="text-sm text-gray-500">
            Written by:{" "}
            <span className="font-bold">{data.name}</span>


        </div>
    )
    
}