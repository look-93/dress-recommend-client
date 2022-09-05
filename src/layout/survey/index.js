import {
  Container,
  Box,
  Typography,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from '@mui/material';
//import { Link } from 'react-scroll';

export default function Survey() {
  return (
    <Box sx={{ pt: 6, pb: 6 }}>
      <Container maxWidth="lx" sx={{ bgcolor: '#bdbdbd', height: 200 }}>
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

          <RadioGroup row sx={{ justifyContent: 'center', my: 5 }}>
            <FormControlLabel
              value="바지"
              control={<Radio color="success" size="large" />}
              label="바지"
            />
            <FormControlLabel
              value="하의"
              control={<Radio color="success" size="large" />}
              label="하의"
            />
          </RadioGroup>
        </Box>
        <Divider />
      </Container>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" align="center">
            질문 2
          </Typography>
          <RadioGroup row sx={{ justifyContent: 'center', my: 5 }}>
            <FormControlLabel
              value="반바지"
              control={<Radio color="success" size="large" />}
              label="반바지"
            />
            <FormControlLabel
              value="긴바지"
              control={<Radio color="success" size="large" />}
              label="긴바지"
            />
            <FormControlLabel
              value="치마"
              control={<Radio color="success" size="large" />}
              label="치마"
            />
          </RadioGroup>
        </Box>
        <Divider />
      </Container>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" align="center">
            질문 3
          </Typography>
          <RadioGroup row sx={{ justifyContent: 'center', my: 5 }}>
            <FormControlLabel
              value="반바지"
              control={<Radio color="success" size="large" />}
              label="반바지"
            />
            <FormControlLabel
              value="긴바지"
              control={<Radio color="success" size="large" />}
              label="긴바지"
            />
            <FormControlLabel
              value="치마"
              control={<Radio color="success" size="large" />}
              label="치마"
            />
          </RadioGroup>
        </Box>
        <Divider />
      </Container>
    </Box>
  );
}
