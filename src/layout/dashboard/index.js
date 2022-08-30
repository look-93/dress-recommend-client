import {
  // Avatar,
  Button,
  Toolbar,
  AppBar,
  Typography,
  Stack,
  Dialog,
} from "@mui/material";
// import CheckroomIcon from "@mui/icons-material/Checkroom";
import Side from "./sidevarList";
import Main from "./main";
import axios from "axios";
import { Link } from "react-router-dom";
import Login from "../authentication/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Review from "../reviewPage/review";
import SignUp from "../authentication/sign-up/index";
export default function Dashboard() {
  const getAllUser = async () => {
    const r = await axios.get("http://localhost:8080/user/all");
    console.log(r);
  };

  const [open, setOpen] = useState(false);
  const handelClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <AppBar position="absolute" padding="0" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Side />

          <Typography color="primary" variant="h6" sx={{ flexGrow: 1 }}>
            Dress
          </Typography>
          <Stack direction="row" sapcing={2}>
            <Button disableRipple onClick={handelClickOpen}>
              로그인
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <Login />
            </Dialog>

            <Link to="signup" style={{ textDecoration: "none" }}>
              <Button disableRipple>회원가입</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
