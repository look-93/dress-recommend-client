import React from "react";

import { Box, Container, Card, CardMedia } from "@mui/material";

export default function Main() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 17 }}>
        <Card sx={{ height: 500, width: 450 }}>
          <img
            src={`https://source.unsplash.com/random`}
            alt="unsplash"
            height="500"
            width="450"
          />
        </Card>
      </Box>
    </Container>
  );
}
