import {
  Box,
  Typography,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Avatar,
  Link,
  Grid,
} from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export default function Login() {
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
        <Avatar>
          <CheckroomIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="id"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="password"
            type="password"
            autoFocus
          />
          <FormControlLabel
            control={
              <Checkbox value="remembar" color="primary" disableRipple />
            }
            label="아이디, 비밀번호를 저장하겠습니까?"
          />
          <Button variant="contained" value="login" fullWidth sx={{ mt: 1 }}>
            login
          </Button>
        </Box>
        <Grid container justifyContent="center">
          <Grid item sx={{ mt: 1 }}>
            <Link href="#" variant="body2">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
