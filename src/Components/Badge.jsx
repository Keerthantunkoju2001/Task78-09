import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';

export default function ColorBadge() {
  return (
    <div className="App">
      <h1>ColorBadge</h1>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={4} color="secondary">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="success">
          <MailIcon color="action" />
        </Badge>
      </Stack>
    </div>
  );
}
