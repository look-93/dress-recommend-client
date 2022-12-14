import {
  Button,
  Toolbar,
  AppBar,
  Typography,
  Stack,
  Dialog,
  Avatar,
} from '@mui/material';
import Side from './sidevarList';
import Main from './main';
import SignUp from '../authentication/sign-up/index';
import Login from '../authentication/login';
import Survey from '../survey';
import Mypage from '../mypage';
import AboutUs from '../aboutus';
import SurveyResult from '../board/surveyResult';
import MyReview from '../board/myReview';
import Realreview from '../reviewPage/realReview';
import Star from '../board/star';
import FaceIcon from '@mui/icons-material/Face';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// const getAllUser = async () => {
//   const r = await axios.get("http://localhost:8080/user/all");
//   console.log(r);
// };

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const handelClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem('userPk') !== null // 로그인상태가아니면 userPk가 null = true , 로그인하면 userPk가 null 이 아님 false
  );
  const handelIsLogin = () => {
    setIsLogin(true);
  };

  const [userName, setUserName] = useState('');
  const getUserName = () => {
    setUserName(sessionStorage.getItem('userName'));
  };

  const [removeMyInfo, setRemoveMyInfo] = useState('');
  const removeMyInfoResult = () => {
    setRemoveMyInfo(sessionStorage.clear());
  };

  const LoginMenu = () => {
    useEffect(() => {
      getUserName();
    }, []);

    if (isLogin) {
      return (
        <>
          <FaceIcon sx={{ mt: 0.5, color: 'text.primary' }} />
          <Button disabled>{userName}님</Button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              disableRipple
              sx={{ color: 'text.secondary' }}
              onClick={() => {
                setIsLogin(false);
                removeMyInfoResult();
              }}
            >
              로그아웃
            </Button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Button disableRipple onClick={handelClickOpen}>
            로그인
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <Login clickLoginBtn={handleClose} LoginSuccess={handelIsLogin} />
          </Dialog>
          <Link to="signup" style={{ textDecoration: 'none' }}>
            <Button disableRipple>회원가입</Button>
          </Link>
        </>
      );
    }
  };

  return (
    <BrowserRouter>
      <AppBar position="absolute" padding="0" sx={{ bgcolor: '#f5f5f5' }}>
        <Toolbar>
          <Side />
          <Link to="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Typography
              fontFamily="Georgia"
              fontSize="x-large"
              color="primary"
              variant="h6"
              align="center"
            >
              LookWearFashion
            </Typography>
          </Link>
          <Stack direction="row" sapcing={2}>
            <LoginMenu />
          </Stack>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/surver" element={<Survey />} />
        <Route
          path="/mypage"
          element={isLogin === false ? <Navigate to="/" /> : <Mypage />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/surveyResult" element={<SurveyResult />} />
        <Route path="/myreview/:rpk/:type" element={<MyReview />} />
        <Route
          path="/realreview"
          element={isLogin === false ? <Navigate to="/" /> : <Realreview />}
        />
        <Route path="/star" element={<Star />} />
      </Routes>
    </BrowserRouter>
  );
}
