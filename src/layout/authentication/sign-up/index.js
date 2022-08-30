import {
  Box,
  TextField,
  Container,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [userId, setUserId] = useState("");
  const onUserIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const [userPwd, setUserPwd] = useState("");
  const onUserPwdHandler = (e) => {
    setUserPwd(e.target.value);
  };
  //이름 이메일 성별 주소
  const [userName, setUserName] = useState("");
  const onUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const [userEmail, setUserEmail] = useState("");
  const onUserEmailHendeler = (e) => {
    setUserEmail(e.target.value);
  };

  const [userGender, setUserGender] = useState("");
  const onGenderHandeler = (e) => {
    setUserGender(e.target.value);
  };

  const [userPh, setUserPh] = useState("");
  const userPhHandler = (e) => {
    setUserPh(e.target.value);
  };

  // private String uId;
  // private String uPassword;
  // private String uName;
  // private String uGender;
  // private String uEmail;
  // private String uPhon;

  const registe = async () => {
    // console.log(userId);
    // console.log(userPwd);
    // console.log(userName);
    // console.log(userEmail);
    // console.log(userGender);
    // console.log(userPh);

    const result = await axios.post("http://localhost:8080/user/signUp", {
      uid: userId,
      upassword: userPwd,
      uname: userName,
      ugender: userGender,
      uemail: userEmail,
      uphon: userPh,
    });
    console.log(result);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          회원가입
        </Typography>
        <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            label="아이디"
            autoFocus
            value={userId}
            onChange={onUserIdHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            type="password"
            value={userPwd}
            onChange={onUserPwdHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="이름"
            value={userName}
            onChange={onUserNameHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="성별"
            select
            value={userGender}
            onChange={onGenderHandeler}
          >
            <MenuItem value={"F"}>여자</MenuItem>
            <MenuItem value={"M"}>남자</MenuItem>
          </TextField>

          <TextField
            margin="normal"
            required
            fullWidth
            label="이메일"
            value={userEmail}
            onChange={onUserEmailHendeler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="휴대전화"
            value={userPh}
            onChange={userPhHandler}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
            disableRipple
            onClick={registe}
          >
            가입하기
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
