import { Container, Grid, Card, CardMedia } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { createTheme } from '@mui/material/styles';

export default function ReviewDetail(props) {
  //console.log(props.rPk);
  const [reviewPkData, setReviewPkData] = useState([]);
  const getReviewByPk = async () => {
    const reviewByPkResult = await axios.get(
      'http://127.0.0.1:8080/review/' + props.rPk
    );
    console.log(reviewByPkResult);
    setReviewPkData(reviewByPkResult.data);
  };

  useEffect(() => {
    //console.log(props.rPk);
    getReviewByPk();
  }, []);

  return (
    <Container maxWidth="md" component="main">
      <Grid
        container
        spacing={2}
        columns={16}
        sx={{ margin: 5, justifyContent: 'center' }}
      >
        <Grid item xs={8}>
          <Card sx={{ width: 330 }}>
            <CardMedia
              onClick={(e) => {
                window.open('https://www.musinsa.com/app/', '_blank');
              }}
              component="img"
              height="200"
              sx={{ objectFit: 'contain' }}
              image={reviewPkData.topImgUrl}
              alt="image"
            />
            <CardMedia
              onClick={(e) => {
                window.open(
                  'https://m-mixxo.elandmall.com/main/initMain.action',
                  '_blank'
                );
              }}
              component="img"
              height="200"
              sx={{ objectFit: 'contain' }}
              image={reviewPkData.bottomImgUrl}
              alt="image"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
