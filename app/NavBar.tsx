import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href="/" className="mr-5">Next.js</Link>
        <Link href="/api/auth/signin" className="mr-5">Login</Link>
        <Link href="/admin" className="mr-5">Admin</Link>
    </div>
  )
}

export default NavBar