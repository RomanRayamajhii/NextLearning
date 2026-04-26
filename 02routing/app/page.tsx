import Link from "next/link";

export default function Home(){
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div >
      <h1 className="text-3xl font-bold text-green-700 text-center p-4">Routing in Next.js</h1>
      <p className="text-lg text-gray-700 mb-4">
        Routing = navigating between pages in a website.
        In Next.js, routing is file-based (automatic), meaning that the structure of the files in the "app" directory determines the routes of the application. Each file corresponds to a route, and the name of the file determines the URL path.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
      / → Home
        </li>
        <li>
      /about → About
        </li>
        <li>
      /products → Products
      </li>
</ul>


</div>
{/* File Based Routing */}
<div className="p-4 bg-white rounded shadow">
  <h2 className="text-2xl font-bold text-green-700 mb-4">1. File-Based Routing</h2>
  <p className="text-lg text-gray-700 mb-4">
    This is the foundation of all routing in Next.js. The file structure in the "app" directory directly maps to the URL structure of the application. 
  </p>
  <p className="text-lg text-gray-700 mb-4">
    Example
  </p>
  <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
    <li>
      app/page.tsx → /
    </li>
    <li>
      app/about/page.tsx → /about
    </li>
    <li>
      app/products/page.tsx → /products
    </li>
  </ul>
  <p className="text-xl text-gray-700 mb-4 font-bold">
    Routing:
  </p>
  <p className="text-gray-700 mb-4 text-xl font-bold">
    <Link href={'/about'} className='text-blue-500 hover:underline font-2xl'>
    /about
    </Link>
  </p>



</div>
{/* Nested Routing */}
<div className="p-4 bg-white rounded shadow mt-6">
  <h2 className="text-2xl font-bold text-green-700 mb-4">2. Nested Routing</h2>
  <p className="text-lg text-gray-700 mb-4">
    Nested routing is achieved by creating subdirectories within the "app" directory. Each subdirectory can contain its own "page.tsx" file, which corresponds to a nested route.
    </p>
  <p className="text-lg text-gray-700 mb-4">
    In simple terms, Nested routing means pages inside another pages.
  </p>
 
  <p className="text-lg text-gray-700 mb-4">
    Example:
  </p>
  <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
    <li>
      app/products/page.tsx → /products
    </li>
    <li>
      app/products/review/page.tsx → /products/review
    </li>
    <li>
      app/about/user/page.tsx → /about/user
    </li>
  </ul>
  <p className="text-xl text-gray-700 mb-4 font-bold">
    Routing:

  </p>
  <p className="text-gray-700 mb-4 text-xl font-bold">
    <Link href={'/about/user'} className='text-blue-500 hover:underline font-2xl'>
    /about/user
    </Link>
  </p>
</div>
{/* Dynamic Routing */}
<div className="p-4 bg-white rounded shadow mt-6">
  <h2 className="text-2xl font-bold text-green-700 mb-4">3. Dynamic Routing</h2>
  <p className="text-lg text-gray-700 mb-4">
    Dynamic routing allows you to create routes that can handle dynamic segments in the URL. This is achieved by using square brackets [] in the file name to indicate a dynamic segment.
  </p>
  <p className="text-lg text-gray-700 mb-4">
    Example:
  </p>
  <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
    <li>
      app/products/[id]/page.tsx → /products/:id
    </li>
  </ul>
  <p className="text-xl text-gray-700 mb-4 font-bold">
    Routing:
  </p>
  <p className="text-gray-700 mb-4 text-xl font-bold">
    <Link href={'/products/123'} className='text-blue-500 hover:underline font-2xl'>
    /products/123
    </Link>
    </p>
    </div>

    {/* Nested Dynamic Routing */}
    <div className="p-4 bg-white rounded shadow mt-6">
  <h2 className="text-2xl font-bold text-green-700 mb-4">3. Nested Dynamic Routing</h2>
  <p className="text-lg text-gray-700 mb-4">
    

  </p>
  <p className="text-lg text-gray-700 mb-4">
    Example:
  </p>
  <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
    <li>
      app/shop/products/[id]/page.tsx → /shop/products/:id
    </li>
    <li>
      app/products/[id]/review/[reviewid]/page.tsx → /products/:id/review/:reviewid
    </li>
  </ul>
  <p className="text-xl text-gray-700 mb-4 font-bold">
    Routing:
  </p>
  <p className="text-gray-700 mb-4 text-xl font-bold">
    <Link href={'/products/1/review/10'} className='text-blue-500 hover:underline font-2xl'>
    /products/1/review/10
    </Link>
    </p>
    </div>

    {/* Catch-all segments */}
    <div className="p-4 bg-white rounded shadow mt-6">
  <h2 className="text-2xl font-bold text-green-700 mb-4">4. Catch-all segments</h2>
  <p className="text-lg text-gray-700 mb-4">
    Catch-all segments are used to match any number of segments in the URL. 
    This is achieved by using three dots ... inside the square brackets [] in the file name.
    </p>
  <p className="text-lg text-gray-700 mb-4">
    Example:
  </p>
  <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
    <li>
      app/blog/[...slug]/page.tsx → /blog/* (matches any URL starting with /blog/)
    </li>
  </ul>
  <p className="text-xl text-gray-700 mb-4 font-bold">
    Routing:
  </p>
  <p className="text-gray-700 mb-4 text-xl font-bold">
    <Link href={'/blog/user/10/first-post'} className='text-blue-500 hover:underline font-2xl'>
    /blog/user/10/first-post
    </Link>
    </p>
    </div>



  


    </div>
  )
}