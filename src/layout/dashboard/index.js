import {
  Button,
  Toolbar,
  AppBar,
  Typography,
  Stack,
  Dialog,
} from '@mui/material';
import Side from './sidevarList';
import Main from './main';
import Review from '../reviewPage/index';
import SignUp from '../authentication/sign-up/index';
import Login from '../authentication/login';
import Survey from '../survey';
import Mypage from '../mypage';

import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// const getAllUser = async () => {
//   const r = await axios.get("http://localhost:8080/user/all");
//   console.log(r);
// };

export default function Dashboard(props) {
  const [open, setOpen] = useState(false);
  const handelClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handelIsLogin = () => {
    setIsLogin(true);
  };

  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem('userPk') !== null // 로그인상태가아니면 userPk가 null = true , 로그인하면 userPk가 null 이 아님 false
  );

  const [userName, setUserName] = useState('');
  const handelUserName = () => {
    setUserName(sessionStorage.getItem('userName'));
  };

  useEffect(() => {
    handelUserName();
  }, []);

  const LoginMenu = () => {
    if (isLogin) {
      return (
        <>
          <Button disabled sx={{ color: 'text.secondary' }}>
            {userName}님
          </Button>
          <Button
            disableRipple
            sx={{ color: 'text.secondary' }}
            onClick={() => {
              setIsLogin(false);
            }}
          >
            로그아웃
          </Button>
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
      <AppBar position="absolute" padding="0" sx={{ bgcolor: 'white' }}>
        <Toolbar>
          <Side />
          <Link to="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Typography color="primary" variant="h6">
              home
            </Typography>
          </Link>
          <Stack direction="row" sapcing={2}>
            <LoginMenu />
          </Stack>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/surver" element={<Survey />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
