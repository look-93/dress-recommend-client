import * as React from 'react';
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
  Button,
  TextField,
  MenuItem,
  Container,
} from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CallIcon from '@mui/icons-material/Call';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailIcon from '@mui/icons-material/Email';
import WcIcon from '@mui/icons-material/Wc';
import { useState, useRef } from 'react';
import Drawer from '@mui/material/Drawer';

export default function Mypage() {
    //기본 프로필 이미지
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
    } else {
      //업로드 취소할 시
      setImage(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
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
  //아래에서 박스 올라오기 기능
  const [state, setState] = React.useState({bottom: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Container maxWidth="sm">
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
    
      
        <TextField
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            type="password"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="비밀번호 확인"
            type="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="이름"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="성별"
            select
          >
            <MenuItem value={'F'}>여자</MenuItem>
            <MenuItem value={'M'}>남자</MenuItem>
          </TextField>

          <TextField
            margin="normal"
            required
            fullWidth
            label="이메일"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="휴대전화"
          />
    </Box>
    <Button variant="contained"
    onClick={toggleDrawer(anchor, false)}>수정하기</Button>
    </Container>
  );

  return (
    <Box>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        sx={{ mt: 15, mb: 5 }}
      >
        <h2>My Page</h2>
      </Typography>
      <Box sx={{ display: 'flex' }} justifyContent="center">
        <Grid container maxWidth="sm">
          <Grid item xs={6} sx={{ mt: 5 }}>
            <input
              type="file"
              style={{ display: 'none' }}
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
              ref={fileInput}
            />
            <Avatar
              alt="Profile"
              src={Image}
              sx={{ height: '180px', width: '180px', mt: 8 }}
              onClick={() => {
                fileInput.current.click();
              }}
              style={{ cursor: 'pointer' }}
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
                <ListItemText primary="아이디" secondary="kosmodjango" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PermIdentityIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="이름"
                  secondary="고길동"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WcIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="성별" secondary="남성" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="이메일" secondary="kosmo@django.com" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CallIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="휴대전화번호"
                  secondary="010-1234-5678"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Grid>
          <Grid item xs={10} sx={{ mt: 1 }}>
            <div>
              {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                <Button size="small" variant="contained" onClick={toggleDrawer(anchor, true)} ><h2>회원정보 수정하기</h2></Button>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
              {list(anchor)}
                </Drawer>
                </React.Fragment>
              ))}
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
