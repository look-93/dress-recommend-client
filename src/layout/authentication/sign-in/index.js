import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Avatar } from "@material-ui/core";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import Typography from "@mui/material/Typography";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import Link from "@mui/material/Link";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://mui.com/"></Link>
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
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
            Sign in
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
              label="Password"
              type="password"
            />
            <FormControlLabel
              control={<Checkbox value="remembar" color="primary" />}
              label="아이디, 비밀번호를 저장하겠습니까?"
            />
            <Button fullWidth variant="contained" sx={{ mt: 3, md: 2 }}>
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up"
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
