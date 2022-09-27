import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
//import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export default function ListItem() {
  return (
    <List style={{ height: '650px', position: 'relative' }}>
      <ListSubheader>Menu</ListSubheader>
      <Link
        to="/Realreview"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ListItemButton>
          <ListItemText primary="실착후기" />
        </ListItemButton>
      </Link>
      <Link to="/mypage" style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemText primary="마이페이지" />
        </ListItemButton>
      </Link>
      <Link to="/aboutus" style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemText primary="About Us" />
        </ListItemButton>
      </Link>
      <div
        style={{
          position: 'fixed',
          bottom: '0px',
          backgroundColor: '#343a40',
          width: '250px',
        }}
      >
        <p style={{ color: 'white' }}>Look Wear Fashion</p>
        <p style={{ color: 'white', fontSize: 'x-small' }}>
          서울시 금천구 가산디지털2로 | (010)1234-5678 | abcde@gmail.com
        </p>
        <a href="https://ko-kr.facebook.com//" target="_blank">
          <img src="img/2.png" style={{ height: '50px', width: '50px' }} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="img/3.png" style={{ height: '50px', width: '50px' }} />
        </a>
        <a href="https://www.naver.com/" target="_blank">
          <img src="img/4.png" style={{ height: '50px', width: '50px' }} />
        </a>
        <a
          href="https://www.kakaocorp.com/page/service/service/KakaoTalk"
          target="_blank"
        >
          <img src="img/5.png" style={{ height: '50px', width: '50px' }} />
        </a>
      </div>
    </List>
  );
}
