'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Card} from "@mui/material";
import Image from 'next/image'

export default function UserDetails({user}: any) {
  return (
    <Container maxWidth="lg">
      <Box sx={{height: 400, width: '100%', p: 6}}>
        <Typography color="primary" variant="h3" gutterBottom>
          User Details
        </Typography>
        <Card sx={{p: 4, display: 'grid', gridTemplateColumns: "300px 1fr"}}>
          <Box>
            <Image
              src={user?.image}
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </Box>
          <Box>
            <Typography variant="h5" gutterBottom>
              Name: {user?.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Age: {user?.age}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Email: {user?.email}
            </Typography>
            <Typography variant="h5" gutterBottom>
              City: {user?.city}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
