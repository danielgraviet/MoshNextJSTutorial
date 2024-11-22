import React from 'react'
import UserTable from './new/UserTable'
import { sort } from 'fast-sort'
import Link from 'next/link'

interface Props {
  searchParams : {sortOrder : string}
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  return (
    <>
    <h1>User</h1>
    <Link href="/users/new" className="btn btn-primary">New User</Link>
    <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage