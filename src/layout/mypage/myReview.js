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

  const allReview = async () => {
    const results = await axios.get('http://localhost:8080/review/all/');
    //console.log(results);
    setDatas(results.data);
  };
  useEffect(() => {
    allReview();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8 }}>
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
              <Typography autoFocus variant="body2">
                {data.content}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
