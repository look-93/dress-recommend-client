import {
  Container,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Button,
  Stack,
  Dialog,
} from "@mui/material";
import { useState } from "react";
import RegistDtail from "./registDetail";

export default function Survey() {
  const [open, setOpen] = useState(false);
  const handelClickOpen = () => {
    setOpen(true);
  };
  const handelClickClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ pt: 6, pb: 6 }}>
      <Container maxWidth="lx" sx={{ bgcolor: "#bdbdbd", height: 200 }}>
        <Typography variant="h4" textAlign="center" sx={{ p: 3 }} gutterBottom>
          무료 성격유형검사
        </Typography>
        <Typography variant="body1" textAlign="center" gutterBottom>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
      </Container>

      <Container sx={{ py: 8 }} maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" align="center">
            질문 1
          </Typography>

          <RadioGroup row sx={{ justifyContent: "center", my: 5 }}>
            <FormControlLabel
              value="바지"
              control={<Radio color="success" size="medium" />}
              label="바지"
            />
            <FormControlLabel
              value="하의"
              control={<Radio color="success" size="medium" />}
              label="하의"
            />
          </RadioGroup>
        </Box>
        <Divider />
      </Container>

      <Stack alignItems="center">
        <Button
          size="large"
          variant="contained"
          sx={{ mt: 10 }}
          onClick={handelClickOpen}
        >
          제출하기
        </Button>
        <Dialog open={open} onClose={handelClickClose}>
          <RegistDtail />
        </Dialog>
      </Stack>
    </Box>
  );
}
