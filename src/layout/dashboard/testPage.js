import { Box, Container, Card } from '@mui/material';
import DialIcon from './dialIcon';

export default function TestPage() {
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
          <DialIcon />
        </Card>
      </Box>
    </Container>
  );
}
