import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function ListItem() {
  return (
    <List>
      <ListSubheader>Menu</ListSubheader>
      <ListItemButton>
        <Link to="/review" style={{ textDecoration: 'none' }}>
          <ListItemText primary="후기" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="마이페이지" />
      </ListItemButton>
    </List>
  );
}
