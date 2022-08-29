import {
  // Avatar,
  Button,
  Toolbar,
  AppBar,
  Typography,
  Stack,
} from '@mui/material';
// import CheckroomIcon from "@mui/icons-material/Checkroom";
import Side from './sidevarList';
import Main from './main';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const getAllUser = async () => {
    const r = await axios.get('http://localhost:8080/user/all');
    console.log(r);
  };
  return (
    <>
      <AppBar position="absolute" padding="0" sx={{ bgcolor: 'white' }}>
        <Toolbar>
          <Side />

          <Typography color="primary" variant="h6" sx={{ flexGrow: 1 }}>
            Dress
          </Typography>
          <Stack direction="row" sapcing={2}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button disableRipple onClick={getAllUser}>
                로그인
              </Button>
            </Link>
            <Link to="signup" style={{ textDecoration: 'none' }}>
              <Button disableRipple>회원가입</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>

      <Main />
    </>
  );
}
