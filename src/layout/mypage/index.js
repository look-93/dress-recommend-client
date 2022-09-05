import * as React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Mypage() {
  const getMyInfo = async () => {
    const upk = sessionStorage.getItem("userPk");
    const result = await axios.get("http://localhost:8080/user/" + upk);
    console.log(result);
    setUserInfo({
      uId: result.data.uid,
      uName: result.data.uname,
      uPh: result.data.uphon,
      uEmail: result.data.uemail,
      uGender: result.data.ugender === "F" ? "여자" : "남자",
    });

    console.log(userInfo);
  };
  useEffect(() => {
    getMyInfo();
  }, []);

  const [userInfo, setUserInfo] = useState({});

  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Box>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        sx={{ mt: 15, mb: 15 }}
      >
        마이페이지
      </Typography>
      <Box sx={{ display: "flex" }} justifyContent="center">
        <Grid container maxWidth="sm">
          <Grid item xs={6} sx={{ mt: 5 }}>
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
              ref={fileInput}
            />
            <Avatar
              alt="Profile"
              src={Image}
              sx={{ height: "100px", width: "100px", mt: 2 }}
              onClick={() => {
                fileInput.current.click();
              }}
              style={{ cursor: "pointer" }}
            />
          </Grid>

          <Grid item xs={6}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AssignmentIndIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="이름" secondary={userInfo.uName} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AssignmentIndIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="회원 아이디" secondary={userInfo.uId} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AssignmentIndIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="성별" secondary={userInfo.uGender} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
