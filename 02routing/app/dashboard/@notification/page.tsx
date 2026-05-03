
'use client'
import Link from 'next/link'
import {Card}  from '@/app/components/card'
import React,{useState} from 'react'

const Page = () => {
    const [count, setCount] = useState(0)


  return (
    <Card>
      <>
        <h1 className="text-2xl text-green-700">Notification</h1>

        <p className="mb-4">
          <b>Notification:</b> <span className="text-red-500">{count}</span>
        </p>
        <Link href="/dashboard/archived" className="text-blue-500 underline mb-4 block">
          Archived
        </Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>
          Refresh
        </button>
      </>
    </Card>
  )
}

export default Page
