import {
  Avatar,
  Button,
  Toolbar,
  AppBar,
  Typography,
  Stack,
} from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export default function Header() {
  return (
    <AppBar position="absolute" padding="0" sx={{ bgcolor: "white" }}>
      <Toolbar>
        <Avatar sx={{ bgcolor: "primary.main", mr: 1 }}>
          <CheckroomIcon />
        </Avatar>
        <Typography color="primary" variant="h6" sx={{ flexGrow: 1 }}>
          Dress
        </Typography>
        <Stack direction="row" sapcing={2}>
          <Button disableRipple>로그인</Button>
          <Button disableRipple>회원가입</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
