import {Card} from '@/app/components/card'
import Link from 'next/link'

const page = () => {
  return (
    <Card>
        
        
        <div>

            <h1>
                Archived Notifications
            </h1>
            <Link href="/dashboard" className='text-blue-500 underline mb-4 block'>
            Default
            
            </Link>

        </div>

   </Card>
      

  )
}

export default page
