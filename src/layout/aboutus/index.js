import * as React from "react";
// import styled from "styled-components";
// import {
//   Container,
//   Grid,
//   Card,
//   CardHeader,
//   CardMedia,
//   TextField,
//   Stack,
//   Button,
//   Typography,
// } from "@mui/material";
// import Box from "@mui/material/Box";
// import { width } from "@mui/system";

export default function AboutUs() {
  return (
    <body
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url("img/watercolor-4117017_960_720.webp")`,
        backgroundSize: "100% 100%",
      }}
    >
      <div style={{ marginTop: "100px" }}>
        <h2 style={{ color: "blue", textAlign: "center" }}>About Us</h2>
        <p>사용자의 선택에 따른 코디를 추천받는 사이트입니다.</p>
        <h3>사이트 개발자</h3>
        <p>ooo,xxx,aaa,bbb,ccc,ddd</p>
      </div>
    </body>
  );
}
