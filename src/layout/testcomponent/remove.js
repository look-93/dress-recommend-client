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
import { useNavigate } from 'react-router-dom';

export default function Remove() {
  const [user, setUser] = useState('');
  const upk = sessionStorage.getItem('userPk');
  const editUser = async () => {
    const editUserResult = await axios.get('http://127.0.0.1:8080/user/' + upk);
    setUser(editUserResult.data);
  };

  const removeUser = async () => {
    const removeUserResult = await axios.delete(
      'http://127.0.0.1:8080/user/delete/' + upk
    );
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
          <TextField margin="normal" fullWidth type="password" />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
            disableRipple
            onClick={removeUser}
          >
            탈퇴하기
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
