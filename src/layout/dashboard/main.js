import React from 'react';
import {
  Box,
  Container,
  Card,
  Button,
  Grid,
  styled,
  Stack,
  Typography,
} from '@mui/material';

export default function Main() {
  return (
    <Box>
      <Stack>
        <Typography
          align="center"
          variant="h4"
          color="text.secondary"
          sx={{ mt: 35 }}
        >
          Dress Recommend
        </Typography>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button size="large" variant="contained" sx={{ mt: 10 }}>
          시작하기
        </Button>
      </Box>
    </Box>
  );
}
