import React from 'react'

const page = () => {
  return (
     <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className='text-3xl font-bold text-green-700 text-center p-4'> This is product page</h1>
            <p>
                Product Details
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Product 1</li>
                <li>product 2</li>
                <li>
                    product 3
                </li>
            </ul>
        </div>
  )
}

export default page
