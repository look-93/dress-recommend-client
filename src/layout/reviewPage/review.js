import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Grid,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Stack } from '@mui/system';

export default function Review() {
  return (
    <Grid display="flex" padding={6} sx={{ gap: 6 }}>
      <Card>
        <CardHeader title="id: " subheader="September 14, 2016" />
        <CardMedia
          sx={{ width: 250 }}
          component="img"
          height="300"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </Card>
      <Card>
        <CardHeader title="id: " subheader="September 14, 2016" />
        <CardMedia
          sx={{ width: 250 }}
          component="img"
          height="300"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </Card>
    </Grid>
  );
}
