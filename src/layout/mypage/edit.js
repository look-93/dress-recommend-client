import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function EditMyPage(props) {
  const [user, setUSer] = useState('');
  const [updatePwd, setUpdatePwd] = useState('');
  const onUdatePwdHandler = (e) => {
    setUpdatePwd(e.taget.value);
  };

  const editUser = async () => {
    const upk = sessionStorage.getItem('userPk');
    const editUserResult = await axios.get('http://127.0.0.1:8080/user/' + upk);
    setUSer(editUserResult.data);

    const updateMyInfo = await axios.put('http://127.0.0.1:8080/user/' + upk);
  };

  useEffect(() => {
    editUser();
  }, []);

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
          회원정보수정
        </Typography>
        <Box>
          아이디
          <TextField margin="normal" fullWidth label={user.uid} disabled />
          비밀번호
          <TextField
            margin="normal"
            fullWidth
            type="password"
            value={updatePwd}
            onChange={onUdatePwdHandler}
          />
          비밀번호확인
          <TextField margin="normal" fullWidth type="password" />
          이름
          <TextField margin="normal" fullWidth label={user.uname} disabled />
          성별
          <TextField
            margin="normal"
            fullWidth
            label={user.ugender === 'F' ? '여자' : '남자'}
            disabled
          />
          이메일
          <TextField margin="normal" required fullWidth label="" />
          휴대전화
          <TextField margin="normal" required fullWidth label="" />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
            disableRipple
            onClick={props.closeHandler}
          >
            수정하기
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
