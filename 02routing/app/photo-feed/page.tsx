import Link from 'next/link'
import React from 'react'
import Image  from 'next/image'
import wonders from "./wonders"

const page = () => {
  return (
    <main className='container mx-auto '>
        <h1 className='text-3xl font-bold text-gray-700 mb-4 text-center'>
            New Wonders of the world
        </h1>
        <div className='grid grid-cols-3 gap-4 mt-4'>
            {wonders.map(({id,src,name})=>(
                <Link key={id} href={`/photo-feed/${id}`}>
                <Image
                        src={src}
                        className="w-full object-cover aspect-square" alt={name}
                        width={300}
                        height={300}
                        loading='eager'
                         />

                
                
                
                </Link>

            ))}

        </div>
    </main>
  )
}

export default page
