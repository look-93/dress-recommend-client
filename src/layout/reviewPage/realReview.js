import React, { useEffect, useState } from 'react';
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Grid,
  Box,
  SwipeableDrawer,
  Typography,
  Stack,
  Avatar,
} from '@mui/material';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ReviewDetail from './reviewDetail';
import RealReviewDetail from './realReviewDetail';
import styled from 'styled-components';
import axios from 'axios';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

export default function Realreview() {
  const actions = [
    { icon: <BuildCircleIcon />, name: '고객센터' },
    { icon: <GroupIcon />, name: '그룹방' },
    { icon: <ChatIcon />, name: '친구채팅방' },
  ];

  const [datas, setDatas] = useState([]);

  const uPk = sessionStorage.getItem('userPk');

  const allReview = async () => {
    const results = await axios.get(
      `http://localhost:8080/review/allUsedReview/${uPk}`
    );
    setDatas(results.data);
    console.log(results.data);
  };

  useEffect(() => {
    allReview();
  }, []);

  //선택된 pk를 담기위한 useState
  const [selectedPk, setSelectedPk] = useState(0);
  const [selectedRealReviewPk, setSelectedRealReviewPk] = useState(0);

  const [open, setOpen] = useState(false);
  const onClickHandler = () => {
    setOpen(true);
  };
  const onClickCloseHandler = () => {
    setOpen(false);
  };

  const [realOpen, setRealOpen] = useState(false);
  const onClickRealReview = () => {
    setRealOpen(true);
  };
  const onClickCloseRealReview = () => {
    setRealOpen(false);
  };

  const addStar = async (rPk) => {
    console.log(rPk);
    await axios.post('http://localhost:8080/review/star/', {
      upk: uPk,
      rpk: rPk,
    });
    allReview();
  };

  const deleteStar = async (sPk) => {
    await axios.delete('http://localhost:8080/review/star/' + sPk);
    allReview();
  };

  const StarBtn = (props) => {
    if (props.isClicked) {
      return (
        <IconButton
          onClick={() => {
            deleteStar(props.sPk);
          }}
        >
          <StarIcon color="warning" />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          onClick={() => {
            addStar(props.rPk);
          }}
        >
          <StarOutlineIcon />
        </IconButton>
      );
    }
  };

  const addHeart = async (rPk) => {
    console.log(rPk);
    await axios.post('http://localhost:8080/review/heart/', {
      upk: uPk,
      rpk: rPk,
    });

    allReview();
  };

  const deleteHeart = async (hPk) => {
    console.log(hPk);
    await axios.delete('http://localhost:8080/review/heart/' + hPk);

    allReview();
  };

  const HeartBtn = (props) => {
    //console.log(props.rPk);
    if (props.clicked) {
      return (
        <IconButton
          onClick={() => {
            deleteHeart(props.hPk);
          }}
        >
          <Favorite color="error" />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          onClick={() => {
            addHeart(props.rPk);
          }}
        >
          <FavoriteBorder />
        </IconButton>
      );
    }
  };
  const Top = styled.button`
    position: fixed;
    bottom: 3%;
    right: 1rem;

    background-color: gray;
    color: white;
    border: gray;
    width: 75px;
    height: 25px;
    border-radius: 25px;
  `;
  return (
    <div style={{ background: 'url(img/7.jpg)' }}>
      <Container sx={{ py: 15 }} maxWidth="md">
        <Top
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          위로 가기
        </Top>
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
                <Stack direction="row-reverse">
                  <StarBtn
                    sPk={data.spk}
                    rPk={data.rpk}
                    isClicked={data.spk !== 0}
                  />
                </Stack>
                <Stack direction="row">
                  <Avatar
                    alt="Remy Sharp"
                    src={data.uimgUrl}
                    sx={{ mt: 2.5, ml: 3, width: 24, height: 24 }}
                  />
                  <CardHeader title={data.uid} subheader={data.urCreateDate} />
                </Stack>
                <CardMedia
                  component="img"
                  height="150vn"
                  sx={{ objectFit: 'contain' }}
                  image={data.fileUrl}
                  alt="이미지파일"
                />

                <Typography autoFocus variant="body2">
                  {data.content}
                </Typography>

                <Grid item>
                  <HeartBtn
                    rPk={data.rpk}
                    hPk={data.hpk}
                    clicked={data.hpk !== 0}
                  />
                  <Typography variant="button">{data.hcnt}</Typography>
                  <Stack direction="row">
                    <Button
                      sx={{ flexGrow: 1 }}
                      size="small"
                      onClick={() => {
                        onClickRealReview();
                        setSelectedRealReviewPk(data.urPk);
                      }}
                    >
                      리뷰
                    </Button>
                    <Button
                      sx={{ flexGrow: 1 }}
                      size="small"
                      onClick={() => {
                        onClickHandler();
                        setSelectedPk(data.rpk);
                      }}
                    >
                      추천결과
                    </Button>
                  </Stack>
                </Grid>
              </Card>
            </Grid>
          ))}
          <Box sx={{ width: 'auto' }} role="presentation">
            <SwipeableDrawer
              anchor="bottom"
              open={realOpen}
              onOpen={onClickRealReview}
              onClose={onClickCloseRealReview}
            >
              <RealReviewDetail urPk={selectedRealReviewPk} rPk={selectedPk} />
            </SwipeableDrawer>
          </Box>
          <Box sx={{ width: 'auto' }} role="presentation">
            <SwipeableDrawer
              anchor="bottom"
              open={open}
              onOpen={onClickHandler}
              onClose={onClickCloseHandler}
            >
              <ReviewDetail rPk={selectedPk} />
            </SwipeableDrawer>
          </Box>
        </Grid>
        <SpeedDial
          ariaLabel="For chating"
          sx={{ position: 'fixed', mb: 8, bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Container>
    </div>
  );
}
