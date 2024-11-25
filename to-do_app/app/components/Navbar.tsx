import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='flex justify-around bg-blue-200 py-4 mx-auto'>
        <div className='w-2/5 text-3xl items-center'>
            <h1>To-Do List App</h1>
        </div>

        <div className='flex w-2/5 justify-around text-xl items-center'>
            <Link href='/'>Home</Link>
            <Link href='/About'>About</Link>
            <Link href='/Contact'>Contact</Link>
        </div>
    </div>
  )
}
