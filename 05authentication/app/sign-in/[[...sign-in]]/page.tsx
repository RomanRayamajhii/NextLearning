import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen py-8'>
        <SignIn/>
      
    </div>
  )
}

export default page
