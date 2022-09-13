import * as React from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  TextField,
  Stack,
  Button,
  Typography, 
} from "@mui/material";
import Box from '@mui/material/Box';

export default function AboutUs() {

  return (
  <div>
    <Box  sx={{ p: 2, border: '1px dashed grey' }}>
      <Typography
              component="h1"
              variant="h4"
              align="center"
              sx={{ mt: 15, mb: 5 }}
            >
              <h2>About Us</h2>
              <p>패션추천사이트</p>
      </Typography>    
    </Box>
  </div>
  )
}