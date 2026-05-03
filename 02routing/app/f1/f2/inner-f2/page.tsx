import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-green-700 mb-4 text-center'>
        Inner F2 - page
        </h1>
        <Link href="/f5" className='text-blue-500 underline mb-4 block text-center'>
            /f5
        </Link>
      
    </div>
  )
}

export default page
