import {
  Container,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Grid,
  Box,
  SwipeableDrawer,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import ReviewDetail from './reviewDetail';

export default function Review() {
  const datas = [
    {
      title: 'testUser',
      subTitle: 'September 14, 2016',
      like: 10,
      src: 'https://source.unsplash.com/random',
    },
    {
      title: 'testUser',
      subTitle: 'September 15, 2016',
      like: 8,
      src: 'https://source.unsplash.com/random',
    },
    {
      title: 'testUser',
      subTitle: 'September 24, 2016',
      like: 15,
      src: 'https://source.unsplash.com/random',
    },
    {
      title: 'testUser',
      subTitle: 'September 24, 2016',
      like: 15,
      src: 'https://source.unsplash.com/random',
    },
  ];
  const [open, setOpen] = useState(false);
  const onClickHandler = () => {
    setOpen(true);
  };
  const onClickCloseHandler = () => {
    setOpen(false);
  };
  return (
    <Container sx={{ py: 15 }} maxWidth="md">
      <Grid container spacing={4}>
        {datas.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardHeader title={data.title} subheader={data.subTitle} />
              <CardMedia
                component="img"
                height="300"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
              />

              <Grid item>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <CardActions>
                  <Button
                    sx={{ flexGrow: 1 }}
                    size="small"
                    onClick={onClickHandler}
                  >
                    View
                  </Button>
                  <Box sx={{ width: 'auto' }} role="presentation">
                    <SwipeableDrawer
                      anchor="bottom"
                      open={open}
                      onClose={onClickCloseHandler}
                    >
                      <ReviewDetail />
                    </SwipeableDrawer>
                  </Box>
                </CardActions>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
