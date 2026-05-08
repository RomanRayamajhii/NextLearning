import Link from "next/link";
import {Search} from "@/app/components/search"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center ">Home Page </h1>
      <Search/>
      <nav className="text-blue-500  flex justify-center bg-gray-200 rounded-xl shadow-md shadow-blue-200">
        <ul  className="flex gap-4 text-xl font-bold">
          <li className="hover:bg-emerald-100 hover:underline rounded-2xl p-4 hover:transition-all ease-in-out duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-emerald-100 rounded-2xl p-4   hover:underline hover:transition-all ease-in-out duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:bg-emerald-100 hover:transition-all   hover:underline ease-in-out duration-300 rounded-2xl p-4">
            <Link href="/user-client">User Client</Link>
          </li>
          <li className="hover:bg-emerald-100 hover:transition-all  hover:underline ease-in-out duration-300 rounded-2xl p-4">
            <Link href="/user-server">User Server</Link>
          </li>
          
           </ul>


      </nav>

      <div className="flex flex-col justify-center items-center ">
        <p>
          Add product with Traditional Form 
          <Link href="/react-form" className="text-blue-500 "> Traditional form </Link>
        </p>
        <p>
          Add product using form  with server Actions
          <Link href="/create-product" className="text-blue-500 "> Server Actions </Link>
          
        </p>
        <p>
          Product Database
          <Link href="/product-db" className="text-blue-500 "> Product Database </Link>
        </p>
      
      </div>
    </div>
  );
}


