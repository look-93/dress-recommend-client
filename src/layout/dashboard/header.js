import { Button, Toolbar, Typography } from "@mui/material";
import React from "react";

function Header(props) {
  const { title } = props;
  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Typography
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        {title}
      </Typography>
      <Button variant="outlined" size="small" sx={{ m: 1 }}>
        Sign in
      </Button>
      <Button variant="outlined" size="small">
        Sign up
      </Button>
    </Toolbar>
  );
}
export default Header;
