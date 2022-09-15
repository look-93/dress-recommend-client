import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Dialog,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../authentication/login';

export default function DeleteMyPage(props) {
  const [user, setUSer] = useState('');
  const [updatePwd, setUpdatePwd] = useState('');
  const onUdatePwdHandler = (e) => {
    setUpdatePwd(e.taget.value);
  };

  const upk = sessionStorage.getItem('userPk');

  const editUser = async () => {
    const editUserResult = await axios.get('http://127.0.0.1:8080/user/' + upk);
    setUSer(editUserResult.data);
  };

  const deleteUser = async () => {
    const deleteUser = await axios.delete(
      'http://127.0.0.1:8080/user/delete/' + upk
    );
  };

  useEffect(() => {
    editUser();
  }, []);
  const [userId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const onUserPwdHandler = (e) => {
    setUserPwd(e.target.value);
  };

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
  const getUserName = () => {
    setUserName(sessionStorage.getItem('userName'));
  };

  const [removeMyInfo, setRemoveMyInfo] = useState('');
  const removeMyInfoResult = () => {
    setRemoveMyInfo(sessionStorage.clear());
  };

  const LoginMenu = () => {
    getUserName();

    if (isLogin) {
      return (
        <>
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
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          회원탈퇴
        </Typography>
        <Box>
          아이디
          <TextField margin="normal" fullWidth label={user.uid} disabled />
          비밀번호
          <TextField
            margin="normal"
            fullWidth
            type="password"
            value={userPwd}
            onChange={onUserPwdHandler}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
            disableRipple
            onClick={() => {
              deleteUser();
              props.closeHandler();
              setIsLogin(false);
              removeMyInfoResult();
              alert('탈퇴 되었습니다.');
              window.location.replace('/');
            }}
          >
            탈퇴하기
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
