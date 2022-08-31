import { Card, CardHeader, CardMedia, IconButton, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
    {
      title: 'testUser',
      subTitle: 'September 24, 2016',
      like: 15,
      src: 'https://source.unsplash.com/random',
    },
  ];
  return (
    <Grid container my={15} spacing={2} justifyContent="center">
      {datas.map((data, index) => (
        <Grid item key={index}>
          <Card>
            <CardHeader title={data.title} subheader={data.subTitle} />
            <CardMedia
              sx={{ width: 250 }}
              component="img"
              height="300"
              image="https://source.unsplash.com/random"
              alt="unsplash image"
            />
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
