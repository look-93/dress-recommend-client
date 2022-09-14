import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MyReview() {
  const [datas, setDatas] = useState([]);
  const [datas1, setDatas1] = useState([]);

  const getMyReviewByPk = async () => {
    const upk = sessionStorage.getItem('userPk');
    const results = await axios.get(
      'http://127.0.0.1:8080/review/myreview/' + upk
    );
    console.log(results);
    setDatas(results.data);
  };

  useEffect(() => {
    getMyReviewByPk();
  }, []);

  return (
    <Box sx={{ display: 'flex', ml: 10 }}>
      <Box sx={{ flexGrow: 1 }} m={2}>
        <Box sx={{ mt: 5, mb: 5, ml: 5 }}>
          <Typography variant="h5">내가 쓴 후기</Typography>
        </Box>
        <Grid container spacing={{ xs: 6, md: 3 }}>
          {datas1.map((data1, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardHeader title={data1.uid} subheader={data1.createDate} />
                <CardMedia
                  component="img"
                  height="300"
                  image={data1.imgurl}
                  alt="unsplash image"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }} m={2}>
        <Box sx={{ mt: 5, mb: 5, ml: 5 }}>
          <Typography variant="h5">내 옷장</Typography>
        </Box>
        <Grid container spacing={{ xs: 6, md: 3 }}>
          {datas.map((data, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardHeader title={data.uid} subheader={data.createDate} />
                <CardMedia
                  component="img"
                  height="300"
                  image={data.imgUrl}
                  alt="unsplash image"
                />
                <Typography autoFocus variant="body2"></Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
