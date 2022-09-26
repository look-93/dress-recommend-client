import React from "react";
import { Container, Card, CardHeader, CardMedia, Grid } from "@mui/material";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Star() {
  const [datas, setDatas] = useState([]);
  const allStar = async () => {
    const uPk = sessionStorage.getItem("userPk");
    const getStar = await axios.get(
      "http://127.0.0.1:8080/review/getAllMyStar/" + uPk
    );
    setDatas(getStar.data);
  };

  useEffect(() => {
    allStar();
  }, []);

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
              <CardHeader title={data.uid} subheader={data.urCreateDate} />
              <CardMedia
                component="img"
                height="200"
                sx={{ objectFit: "contain" }}
                image={data.fileUrl}
                alt="이미지파일"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
