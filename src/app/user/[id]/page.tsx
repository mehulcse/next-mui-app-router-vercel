import * as React from 'react';
import UserDetailsLayout from '@/layouts/UserDetails/UserDetails';

async function getUsers(id: string) {
  const data = await fetch(`https://run.mocky.io/v3/e7035b01-2b3e-4b77-ab48-aaa0d3aade0e`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  const users = await data.json()
  return users.find((user: any) => user.id === Number(id));
}

export default async function UserDetails({params}: {params: {id: string}}) {
  const user = await getUsers(params.id);
  return <UserDetailsLayout user={user} />;
}
