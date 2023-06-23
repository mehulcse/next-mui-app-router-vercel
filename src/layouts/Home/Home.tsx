'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Link from 'next/link';

const columns: GridColDef[] = [
  {
    field: 'id', headerName: 'ID', width: 90, flex: 1,
    renderCell: (params) => (
      <Link href={`/user/${params.value}`}>
        {params.value}
      </Link>
    )
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    renderCell: (params) => (
      <Link href={`/user/${params.row.id}`}>
        {params.value}
      </Link>
    )
  },
  {
    field: 'age',
    headerName: 'Age',
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'city',
    headerName: 'City',
    sortable: false,
    flex: 1,
  },
];

export default function Home({users}: any) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}
