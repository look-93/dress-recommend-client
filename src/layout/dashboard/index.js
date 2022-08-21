import { Box, Container } from "@mui/material";
import Header from "./header";
import { mainListItems } from "./listItems";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width"),
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width"),
      width: theme.spacing(7),
    }),
  },
}));

function DerssRecommend() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Header title="Derss Recommend" />
      </Container>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <List component="nav">{mainListItems}</List>
      </Drawer>
    </Box>
  );
}

export default DerssRecommend;
