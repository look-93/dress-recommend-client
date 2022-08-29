import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ListItem() {
  const [open, setOpen] = useState('true');
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListSubheader>Menu</ListSubheader>
      <ListItemButton>
        <Link to="testPage" style={{ textDecoration: 'none' }}>
          <ListItemText primary="test1" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="test2" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="test3" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="test4" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open}>
        <List>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="test5" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    // <Stack sx={{ mt: 2 }}>
    //   <Button variant="text" disableRipple>
    //     봄
    //   </Button>
    //   <Button variant="text" disableRipple>
    //     여름
    //   </Button>
    //   <Button variant="text" disableRipple>
    //     가을
    //   </Button>
    //   <Button variant="text" disableRipple>
    //     겨울
    //   </Button>
    // </Stack>
  );
}
