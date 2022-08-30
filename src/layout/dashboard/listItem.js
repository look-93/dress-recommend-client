import {
  // Button,
  // Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function ListItem() {
  // const [open, setOpen] = useState('true');
  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <List>
      <ListSubheader>Menu</ListSubheader>
      <ListItemButton>
        <ListItemText primary="후기" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="마이페이지" />
      </ListItemButton>

      {/* <ListItemButton onClick={handleClick}>
        <ListItemText primary="test4" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton> */}
      {/* <Collapse in={open}>
        <List>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="test5" />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
}
