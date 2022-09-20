import * as React from "react";
import styles from "./index.css";
import styled from "styled-components";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  TextField,
  Stack,
  Button,
  Typography, 
} from "@mui/material";
import Box from '@mui/material/Box';
import { width } from "@mui/system";

export default function AboutUs() {
  return (
    <body>
      <div>     
        <div className="container">	
          <ht>Look Wear Fashion</ht>    
          <svg className="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle id="Oval" cx={512} cy={512} r={512} />
            <circle id="Oval" cx={512} cy={512} r={512} />
            <circle id="Oval" cx={512} cy={512} r={512} />
          </svg>            
        </div>
      </div>

      <div style={{ position: "relative"}}>
        <div style={{ position: "relative", margin : "50px 0px 0px 250px", display:"inline-block"}}>
          <img src="img/1.jpg" width="350px" height="250px" style={{ verticalAlign:"top"}} /> 
          <div style={{ display:"inline-block", textAlign: "center", margin: "10px 0 0 50px"}}>
            <h1 style={{ fontFamily: "Georgia, serif" ,  textAlign: "center"}}>About Us</h1>        
            <p style={{ fontFamily: "MarkPro, sans-serif"}}>
             패션에 관심있는 이용자들의 선택을 통해 코디를 추천받는 사이트입니다.<br />
             추천받은 코디는 마이페이지 옷장에 저장되어 확인 하고 평가 할 수 있습니다.</p>    
          </div>              
        </div>

        <div style={{ position: "relative", margin : "50px 0px 0px 250px", display:"inline-block"}}>
          <div style={{ display:"inline-block", textAlign: "center", margin: "10px 0 0 50px"}}>
            <h1 style={{ fontFamily: "Georgia, serif" ,  textAlign: "center"}}>SnS</h1>        
            <p style={{ fontFamily: "MarkPro, sans-serif"}}>
             옷장에 저장된 코디에 맞춰 입어보고 마음에 들면 다른 회원들에게 자신의 모습을<br />
             보여주고 의견을 나눌 수 있습니다.</p>    
          </div>              
          <img src="img/sns.png" width="200px" height="350px" style={{ margin:"0 0 0 50px ", verticalAlign:"top"}} /> 
        </div>


        <div style={{ position: "relative", margin : "50px 0px 0px 250px", display:"inline-block"}}>
          <img src="img/6.webp" width="400px" height="250px" style={{ verticalAlign:"top"}} /> 
          <div style={{ display:"inline-block", textAlign: "center", margin: "10px 0 0 50px"}}>
            <h1 style={{ fontFamily: "Georgia, serif" ,  textAlign: "center"}}>Buying</h1>        
            <p style={{ fontFamily: "MarkPro, sans-serif"}}>
             추천 받은 코디를 살 수 있는 패션 쇼핑몰로 연결해 드립니다. </p>    
          </div>              
        </div>
      </div>        
    </body>  

  )
}

