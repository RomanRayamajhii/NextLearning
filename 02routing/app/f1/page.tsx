import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="p-4 bg-white rounded shadow mt-6 mb-6">
        <h1 className='text-3xl font-bold text-green-700 mb-4 text-center'>
            Intercepted Route Example - F1
        </h1>

        <Link href="/f1/f2" className='text-blue-500 underline mb-4 block text-center'>
            Go to F2 (/f1/f2)
        </Link>
        <Link href="/f3" className='text-blue-500 underline mb-4 block text-center'>
        Go to F3 (/f1/f3)
        </Link>
      
    </div>
  )
}

export default page
