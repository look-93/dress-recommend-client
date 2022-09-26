import { Button, Box, Stack } from '@mui/material';
import { React } from 'react';
import { Link } from 'react-router-dom';
import ViewCompactAltOutlinedIcon from '@mui/icons-material/ViewCompactAltOutlined';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export default function BtnGroup() {
  return (
    <Box sx={{ display: 'flex' }} justifyContent="center">
      <Stack
        direction={{ sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ mt: 5, mb: 10 }}
      >
        <Link to="/surveyResult" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            sx={{ p: 4, width: 300, height: 150 }}
            disableRipple
          >
            <ViewCompactAltOutlinedIcon fontSize="large" />
            옷장
          </Button>
        </Link>

        <Link to="/star" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            sx={{ p: 4, width: 300, height: 150 }}
            disableRipple
          >
            <StarHalfIcon fontSize="large" />
            즐겨찾기모음
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
