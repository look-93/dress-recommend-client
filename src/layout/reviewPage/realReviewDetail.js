import { Container, Grid, Card, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReviewMessage from './reviewMessage';

export default function RealReviewDetail(props) {
  const [reviewPkData, setReviewPkData] = useState([]);
  const getReviewByPk = async () => {
    const reviewByPkResult = await axios.get(
      'http://127.0.0.1:8080/review/getUsedReviewByPk/' + props.urPk
    );

    setReviewPkData(reviewByPkResult.data);
  };

  useEffect(() => {
    getReviewByPk();
  }, []);

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={2} columns={16} sx={{ margin: 5 }}>
        <Grid item xs={8}>
          <Card sx={{ width: 330 }}>
            <CardMedia
              component="img"
              height="300"
              sx={{ objectFit: 'contain' }}
              image={reviewPkData.fileUrl}
              alt="이미지파일"
            />
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2">{reviewPkData.urCreateDate}</Typography>
          <Typography variant="body2">제목: {reviewPkData.title}</Typography>
          <Typography variant="body2">
            내 평가: {reviewPkData.contents}
          </Typography>
          <Typography variant="body2">
            내 별점: {reviewPkData.rating}
          </Typography>

          <ReviewMessage rPk={props.rPk} urPk={props.urPk} />
        </Grid>
      </Grid>
    </Container>
  );
}
