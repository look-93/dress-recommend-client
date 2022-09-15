import {
  Card,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RegistDtail() {
  const registe = async () => {
    const uPk = sessionStorage.getItem("userPk");
    //console.log(uPk);
    await axios.post("http://127.0.0.1:8080/review/review/", {
      imgUrl:
        "https://images.unsplash.com/photo-1588287055455-9fb0ca7a2d02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      upk: uPk,
    });
  };

  const userId = sessionStorage.getItem("userId");

  return (
    <Container maxWidth="md" component="main">
      <Grid container justifyContent="center">
        <Grid item>
          <CardHeader
            title={userId}
            titleTypographyProps={{ align: "center" }}
          />
          <Card sx={{ width: 500, m: 3 }}>
            <CardMedia
              component="img"
              height="500"
              image=""
              alt="unsplash image"
            />
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="한줄평"
              value={content}
              onChange={contentHandler}
              fullWidth
              variant="standard"
            /> */}
          </Card>
          <Grid item>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button fullWidth disableRipple onClick={registe}>
                결과저장
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
