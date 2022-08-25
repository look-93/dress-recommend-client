import {
  Box,
  TextField,
  Container,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";

export default function SignUp() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          회원가입
        </Typography>
        <Box>
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="이름"
            label="이름"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="성별"
            label="성별"
            select
          >
            <MenuItem value={10}>여자</MenuItem>
            <MenuItem value={20}>남자</MenuItem>
          </TextField>

          <TextField
            margin="normal"
            required
            fullWidth
            id="이메일"
            label="이메일"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="휴대전화"
            label="휴대전화"
          />
          <Button
            variant="contained"
            value="signup"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
            disableRipple
          >
            가입하기
          </Button>
        </Box>
        <Menu>
          <MenuItem>여자</MenuItem>
          <MenuItem>남자</MenuItem>
        </Menu>
      </Box>
    </Container>
  );
}
