import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Main() {
  return (
    <Box>
      <div
        style={{
          position: 'relative',
          width: '100vw',
          overflow: 'hidden',
          margin: '150px 0 0 0px',
        }}
      >
        <Swiper
          loop="true"
          className="banner"
          spaceBetween={150}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          style={{ width: '600px' }}
        >
          <SwiperSlide style={{ width: '100vw' }}>
            <img src="img/1.jpg" style={{ width: '600px', height: '300px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/1.webp" style={{ width: '600px', height: '300px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/6.webp" style={{ width: '600px', height: '300px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="img/sns.PNG"
              style={{ width: '600px', height: '300px' }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Stack>
        <Typography
          align="center"
          variant="h4"
          color="text.secondary"
          sx={{ mt: 10 }}
        >
          Dress Recommend
        </Typography>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link to="surver" style={{ textDecoration: 'none' }}>
          <Button size="large" variant="contained" sx={{ mt: 10 }}>
            시작하기
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
