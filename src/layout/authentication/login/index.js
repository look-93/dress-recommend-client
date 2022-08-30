import {
  Box,
  Typography,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Avatar,
} from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export default function Login(props) {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "#ef6694", mb: 1 }}>
          <CheckroomIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, mb: 4 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="아이디"
            label="아이디"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="비밀번호"
            label="비밀번호"
            type="password"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remembar"
                color="primary"
                disableRipple
                size="small"
              />
            }
            label="아이디, 비밀번호를 저장하겠습니까?"
          />

          <Button
            variant="contained"
            value="login"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => {
              props.clickLoginBtn();
            }}
          >
            로그인
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
