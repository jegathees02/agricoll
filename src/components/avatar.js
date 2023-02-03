import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';

export default function FallbackAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: blue[900] }}
        alt="Remy Sharp"
        
      >
        J
      </Avatar>
    
    </Stack>
  );
}
