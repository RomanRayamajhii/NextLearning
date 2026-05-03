import React from 'react'
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Loading Products',
  description: 'This page is loading the products data.',
}

const loading = async  () => {


  return (
    <div className='flex justify-center items-center'>
      <h1 className='text-2xl text-green-700'>
      loading .....
        </h1>
    </div>
  )
}

export default loading
