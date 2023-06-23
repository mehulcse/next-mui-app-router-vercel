import * as React from 'react';
import Home from '@/layouts/Home/Home';
async function getUsers() {
  const data = await fetch(`https://run.mocky.io/v3/e7035b01-2b3e-4b77-ab48-aaa0d3aade0e`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}


export default async function RootPage() {
  const users = await getUsers();
  return <Home users={users} />;
}
