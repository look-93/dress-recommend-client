import {
  Divider,
  Box,
  Grid,
  Typography,
  TextField,
  Stack,
} from '@mui/material';

export default function MyReview() {
  return (
    <Box>
      <Grid item xs={12} md={8} mt={12}>
        <Typography variant="h6" gutterBottom align="center">
          Review
        </Typography>
      </Grid>

      <Box mt={5} mb={5} sx={{ display: 'flex' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography>제목</Typography>
          </Grid>
          <Grid item>
            <TextField sx={{ width: 450 }} />
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box mt={5} mb={5} sx={{ display: 'flex' }} justifyContent="center">
        <Grid item>
          <Typography>평점</Typography>
        </Grid>
      </Box>
      <Divider />
      <Box mt={5} sx={{ display: 'flex' }} justifyContent="center">
        <Grid item>
          <TextField
            sx={{ width: 500 }}
            id="outlined-multiline-static"
            multiline
            rows={10}
          />
        </Grid>
      </Box>
    </Box>
  );
}
