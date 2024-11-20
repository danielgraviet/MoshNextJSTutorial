import React from 'react'
import UserTable from './new/UserTable'
import { sort } from 'fast-sort'

interface Props {
  searchParams : {sortOrder : string}
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  return (
    <>
    <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage