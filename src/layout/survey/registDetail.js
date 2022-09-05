import {
  Card,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  TextField,
  Button,
  Stack,
} from '@mui/material';

const test = [
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    src: 'https://source.unsplash.com/random',
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
];

export default function RegistDtail() {
  return (
    <Container maxWidth="md" component="main">
      <Grid container justifyContent="center">
        <Grid item>
          <Card sx={{ width: 330 }}>
            <CardHeader
              title={test.title}
              titleTypographyProps={{ align: 'center' }}
            />
            <CardMedia
              component="img"
              height="330"
              image="https://source.unsplash.com/random"
              alt="unsplash image"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="한줄평"
              fullWidth
              variant="standard"
            />
            <Stack alignItems="center">
              <Button size="small">확인</Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
