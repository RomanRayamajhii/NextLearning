'use client'
import React, { useEffect } from 'react'


const page = () => {
    
    const [isLogin, setIsLogin] = React.useState(false);

    return (
    <div>
        <h1 className='text-2xl text-green-700'>
            Login Page
        </h1>
        <p className='text-lg text-gray-700 text-center'>
            This is the login page in dashboard
        </p>
        <hr />
      
    </div>
  )
}

export default page
