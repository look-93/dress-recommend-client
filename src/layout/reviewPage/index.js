import React, { useEffect, useState } from "react";
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
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReviewDetail from "./reviewDetail";
import axios from "axios";

export default function Review() {
  const [datas, setDatas] = useState([]);

  const allReview = async () => {
    let results = await axios.get("http://localhost:8080/review/all/");
    //console.log(results);
    setDatas(results.data);
  };
  useEffect(() => {
    allReview();
  }, []);

  //선택된 pk를 담기위한 useState
  const [selectedPk, setSelectedPk] = useState(0);

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
                height: "100%",
                display: "flex",
                flexDirection: "column",
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

              <Grid item>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <CardActions>
                  <Button
                    sx={{ flexGrow: 1 }}
                    size="small"
                    onClick={() => {
                      onClickHandler();
                      setSelectedPk(data.rpk);
                    }}
                  >
                    View
                  </Button>
                </CardActions>
              </Grid>
            </Card>
          </Grid>
        ))}
        <Box sx={{ width: "auto" }} role="presentation">
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
    </Container>
  );
}
