import Link from "next/link";

export default  function Home(){


  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div >
      <h1 className="text-3xl font-bold text-green-700 text-center p-4">Routing in Next.js</h1>
      <p className="text-lg text-gray-700 mb-4">
        Routing = navigating between pages in a website.
        In Next.js, routing is file-based (automatic), meaning that the structure of the files in the &quot;app&quot; directory determines the routes of the application. Each file corresponds to a route, and the name of the file determines the URL path.
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
    This is the foundation of all routing in Next.js. The file structure in the &quot;app&quot; directory directly maps to the URL structure of the application. 
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
    Nested routing is achieved by creating subdirectories within the &quot;app&quot; directory. Each subdirectory can contain its own &quot;page.tsx&quot; file, which corresponds to a nested route.
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
    <div className="p-4 bg-white rounded shadow mt-6 mb-6">
  <h2 className="text-2xl font-bold text-green-700 mb-4">4. Catch-all segments</h2>
  <p className="text-lg text-gray-700 mb-4">
    Catch-all segments are used to match any number of segments in the URL. 
    This is achieved by using three dots ... inside the square brackets [] in the file name.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      <b>Normal Dynamic Routing: </b>  app/products/[id]/page.tsx → /products/:id 
      <br />
     <span> Only matches URLs with exactly one segment after /products/ (e.g., /products/123, but not /products/123/review)</span> 
   </p>
   <p className="text-lg text-gray-700 mb-4">
      <b>Catch-all Routing: </b>  app/products/[...slug]/page.tsx → /products/* 
      <br />
      Matches any URL starting with /products/ (e.g., /products/123, /products/123/review, /products/category/electronics, etc.)
      </p>


   <p className="text-lg text-gray-700 mb-4">
      Catch-all Routing: app/products/[...slug]/page.tsx → /products/* 
      
      <br />
      Catch-all Routing: app/products/[...slug]/page.tsx → /products/* (matches any URL starting with /products/)
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

<hr />
{/* Not Found Page */}
<div className="p-4 bg-white rounded shadow mt-6">
  <h2 className="text-3xl font-bold text-red-500 mb-4 text-center">Not Found Page</h2>
  <p className="text-lg text-gray-700 mb-4">  
    The Not Found page is a special page in Next.js that is displayed when a user tries to access a route that does not exist. 
    You can create a custom Not Found page by creating a file named &quot;not-found.tsx&quot; in the &quot;app&quot; directory.
  </p>
  <p>
    Example:
  </p>
  <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
    <li>
      app/not-found.tsx → Displayed for any non-existent route
    </li>
    <li>
      app/products/[id]/review/not-found.tsx → Displayed for non-existent review routes
    </li>
  </ul> 
</div>
{/* File Colocation */}

    <div className="p-4 bg-white rounded shadow mt-6 mb-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        File Colocation
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        File colocation is a feature in Next.js that allows you to colocate related files together in the same directory.
         This means that you can keep your components, styles, and tests for a specific page or feature in the same folder,
          making it easier to manage and maintain your codebase.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li className=" text-gray-700 ml-6">
          app <br />
          ├── products <br />
          │   ├── [id] <br />
          │   │   ├── page.tsx →  <span className="text-green-700  bg-green-200 px-2 rounded-md border-2  border-green-700 text-sm ">Routable</span>  <br />
          |   |   |
          │   │   └── productcards.tsx  →  <span className="text-red-700 px-2 bg-red-200  rounded-md border-2 border-red-700 text-sm ">Not Routable</span> <br />
          </li>
          </ul>

    </div>
    {/* private folder */}
    <div className="p-4 bg-white rounded shadow mt-6 mb-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        Private Folder
      </h1>
      <p className="text-lg text-gray-700 mb-4">
       A folder prefixed with an underscore (_) 
       that is ignored by the routing system and 
       is used to store internal files such as components, 
       utilities, and helper logic.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          app/_lib/utils.js
        </li>
        <li>
          app/
      _components/
        ProductCard.tsx
        </li>
      
      </ul></div>
      {/* Route group */}
      <div className="p-4 bg-white rounded shadow mt-6 mb-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        Route Group
      </h1>
      <p className="text-lg text-gray-700 mb-4">
      Route groups can be created by wrapping a folder in parenthesis: (folderName)
      <br />
This indicates the folder is for organizational purposes and should not be included in the route&apos;s URL path.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          app/(admin)/dashboard/page.tsx → /dashboard
        </li>
        <li>
          app/(auth)/login/page.tsx → /login
        </li>
      </ul>
     
    </div>
    {/* Layout  */}
    <div className="p-4 bg-white rounded shadow mt-6 mb-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        Layouts
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Layouts are a powerful feature in Next.js that allow you to define a common structure for multiple pages. 
        By creating a layout file (layout.tsx) in a directory, you can wrap all the pages in that directory with the same layout, ensuring a consistent look and feel across your application.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          app/layout.tsx → Global layout for the entire application
        </li>
       
      </ul>
      <hr />
      <div className="p-4 bg-gray-50 rounded">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          Nested Layouts
        </h1>
          <p className="text-lg text-gray-700 mb-4">
             You can also create nested layouts by placing layout.tsx files in subdirectories.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Example:
          </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>
            app/products/layout.tsx → Layout for all product-related pages
          </li>
          <li>
            app/products/[id]/layout.tsx → Layout for individual product pages
          </li>
        </ul>
      </div>
    </div>
    {/* loding ui and error */}
    <div className="p-4 bg-white rounded shadow mt-6 mb-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        Loading UI
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Next.js allows you to create loading states for your pages by creating a loading.tsx file in the same directory as your page.
        This file will be rendered while the page is loading, providing a better user experience.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          app/loading.tsx → Global loading component for all routes
        </li>
        
        <li>
          app/products/loading.tsx → Loading component for product-related routes
        </li>
      </ul>
    </div>
    {/* Error handling  */}
  <div className="p-4 bg-white rounded shadow mt-6 mb-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        Error Handling
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Error handling in Next.js uses error.jsx to display a fallback UI when a runtime error occurs in a route segment.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          app/error.tsx → Global error component for all routes
        </li>
        
        <li>
          app/products/error.tsx → This handles errors for everything inside /products
        </li>
      </ul>
    </div>
    {/* Parallel Routes */}
      <div className="p-4 bg-white rounded shadow mt-6 mb-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        Parallel Routes
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Parallel routes let you render multiple pages (routes) at the same time in one layout.
        This is useful for complex layouts where you want to show different content in different sections of the page without navigating away.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          app/ <br />
 ├─ dashboard/ <br />
 │   ├─ layout.tsx <br />
 │   ├─ @sidebar/ <br />
 │   │   └─ page.tsx <br />
 │   ├─ @content/ <br />
 │   │   └─ page.tsx <br />
 │   ├─ @notifications/ <br />
 │       └─ page.tsx <br />
        </li>
@sidebar, @content, @notifications = parallel routes (slots)
      </ul>
      <p className="text-lg text-gray-700 mb-4">
         <b>Routing:</b>
         <Link href={'/dashboard'} className='ml-2'>
          <span className="text-blue-500 hover:underline font-2xl">
          /dashboard
          </span>
         </Link>
      </p>
      <h2>
        Layout Usage
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        In the dashboard layout (app/dashboard/layout.tsx), you can define where each parallel route will be rendered using the <code>&lt;Slot name=&quot;routeName&quot; /&gt;</code> component.
      </p>
      
      </div>

      {/* unmatched Routes */}
      <div className="p-4 bg-white rounded shadow mt-6 mb-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        Unmatched Routes
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        When a user tries to access a route that does not exist, Next.js will automatically render the not-found.tsx page if it exists. 
        This allows you to provide a custom 404 page for your application.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
      <li className="text-gray-700">
       app/dashboard/ <br />
 ├─ layout.tsx <br />
 |--default.tsx <br />
 ├─ @sidebar/ <br />
 │   └─ page.tsx <br />
    |--default.tsx <br />
 ├─ @content/ <br />
 │   └─ page.tsx <br />
    |--default.tsx <br />
 ├─ @notifications/ <br />
 │   └─ page.tsx <br />
    |--default.tsx <br />
 </li>
      </ul>
      </div>
    
      


{/* Conditional Routes */}

<div className="p-4 bg-white rounded shadow mt-6 mb-6">
  <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
    Conditional Routes
  </h1>
  <p className="text-lg text-gray-700 mb-4">
    Conditional routes allow you to render different components or pages based on certain conditions, such as user authentication status or feature flags. 
    This can be achieved using client-side logic within your components to determine which content to display.
  </p>
</div>
{/* Intercepted Routes */}
<div className="p-4 bg-white rounded shadow mt-6 mb-6">
  <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
    Intercepted Routes
  </h1>
  <p className="text-lg text-gray-700 mb-4">
   It is an advanced routing menhanism that allows you to load a route from another part of the application within the current layout.
   This is useful when you want to display new content while keeping user in same context.

   In simple terms, Intercepted routes shows new page inside the current page without navigating away from it.
  </p>
  <p className="text-lg text-gray-700 mb-4">
    How it works?
    </p>

    <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
      <li className="text-gray-700">
         (.) represents a route at the same level of the current route segment.

         <p className="text-lg text-gray-700 mb-4">
          Example:
         </p>
         < p className="text-lg text-gray-700 ml-4 mb-4">
          app  <br />
          |-f1 <br />
            |-page.tsx <br />
            |-f2 <br />
             |-page.tsx <br />
            |-(.)f2 <br />
             |-page.tsx <br />
         </p>

         


        

        </li>
        <li className="text-gray-700">
    (..) represents a route from one level up (parent segment).
<p>
  Example:
</p>
<p className="text-lg text-gray-700 ml-4 mb-4">
  app <br />
  |-f1 <br />
  | |-page.tsx  <br />
  | |-(..)f3 <br />
  |  |-page.tsx <br />
  |-f3 <br />
    |-page.tsx   <br />
</p>

          </li> 
          <li className="text-gray-700" >
            (..) (..) represents a route from two levels up (grandparent segment)
<p className="text-lg text-gray-700 mb-4">
  Example:
</p>
<p className="text-lg text-gray-700 ml-4 mb-4">
  app  <br />
  |-f1 <br />
  | |-page.tsx <br />
  | |-(..)(..)f4 <br />
  |   |-page.tsx <br />
  |-f4 <br />
  | |-page.tsx <br />
  


</p>

          </li>
          
          <li className="text-gray-700">
    (...) epresents a route starting from the root of the application.
    <p className="text-lg text-gray-700 mb-4">
      Example:
    </p >
    <p className="text-lg text-gray-700 ml-4 mb-4">
      app  <br />
      |-f1 <br />
      |  |f2 <br />
      |   |-page.tsx <br />
      |   |-inner-f2 <br />
      |    |-page.tsx <br />
         |-(...)f5  <br />
      |    |-page.tsx <br />
      | 
      |-f5 <br />
        |-page.tsx <br />
  
     
    </p>
  </li>
</ul>
  
  <p className="text-lg text-gray-700 mb-4 font-bold">

    Routing:
  </p>
  <Link href={'/f1'} className='text-blue-500 hover:underline font-2xl'>
   intercepted route Example
  </Link>
  
</div>
    </div>
  )
}
