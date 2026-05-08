type User={
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;

};
export default async function User(){
    await new Promise((resolve)=>setTimeout(resolve,2000));
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data:User[]=await res.json();
    return (

        <ul className="p-4">
            {data.map((user)=>(
                <li key={user.id} className="px-4 shadow-md shadow-blue-200 rounded-xl py-6 mt-6 bg-white text-gray-700">
                    
                    <div className="font-bold">
                        {user.name}


                    </div>
                    <div>
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

