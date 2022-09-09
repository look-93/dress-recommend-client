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
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const test = [
//   {
//     title: "Pro",
//     subheader: "Most popular",
//     price: "15",
//     src: "https://source.unsplash.com/random",
//     buttonText: "Get started",
//     buttonVariant: "contained",
//   },
// ];

export default function RegistDtail() {
  const [content, setContent] = useState('');
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const registe = async () => {
    const uPk = sessionStorage.getItem('userPk');
    console.log(uPk);
    await axios.post('http://127.0.0.1:8080/review/review/', {
      imgUrl: 'https://source.unsplash.com/random',
      upk: uPk,
      content: content,
    });
  };

  return (
    <Container maxWidth="md" component="main">
      <Grid container justifyContent="center">
        <Grid item>
          <Card sx={{ width: 330 }}>
            <CardHeader title="dd" titleTypographyProps={{ align: 'center' }} />
            <CardMedia
              component="img"
              height="330"
              image=""
              alt="unsplash image"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="한줄평"
              value={content}
              onChange={contentHandler}
              fullWidth
              variant="standard"
            />
            <Stack alignItems="center">
              <Link to="/review">
                <Button size="small" onClick={registe}>
                  확인
                </Button>
              </Link>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
