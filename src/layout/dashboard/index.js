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
import Review from '../reviewPage/review';
import SignUp from '../authentication/sign-up/index';
import Login from '../authentication/login';

import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Dashboard(props) {
  // const getAllUser = async () => {
  //   const r = await axios.get("http://localhost:8080/user/all");
  //   console.log(r);
  // };
  //sx={{ flexGrow: 1 }}

  const [open, setOpen] = useState(false);
  const handelClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            <Button disableRipple onClick={handelClickOpen}>
              로그인
            </Button>

            <Dialog open={open} onClose={handleClose}>
              <Login clickLoginBtn={() => handleClose()} />
            </Dialog>

            <Link to="signup" style={{ textDecoration: 'none' }}>
              <Button disableRipple>회원가입</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
