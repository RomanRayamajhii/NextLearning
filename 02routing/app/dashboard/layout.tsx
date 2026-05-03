'use client'
import React, { useState } from 'react'
export default function DashboardLayout({
  children,
  sidebar,
  notification,
  content,
  login,

}: {
  children: React.ReactNode
    sidebar: React.ReactNode
    notification: React.ReactNode
    content: React.ReactNode
    login: React.ReactNode
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (!isLoggedIn) {
      return (
      <div>
        {login}
        <button className='px-4 py-2 bg-blue-500 text-white rounded mt-4 ml-4' onClick={() => setIsLoggedIn(true)}>Toggle Login State</button>
      </div>
      )
    }

    return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
        <div className='flex gap-4 mt-4'>
          {sidebar}
          {notification}
          {content}
        </div>
    </div>
  )
}