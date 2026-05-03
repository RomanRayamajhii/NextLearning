import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="p-4 bg-white rounded shadow mt-6 mb-6">
        <h1 className='text-3xl font-bold text-green-700 mb-4 text-center'>
            F2 Page
        </h1>
        <Link href="/f4" className='text-blue-500 underline mb-4 block text-center'>
        /f4 
        </Link>
        <Link href="f2/inner-f2" className="text-blue-500 underline mb-4 block text-center ">
        /inner-f2
        </Link>
      
    </div>
  )
}

export default page
