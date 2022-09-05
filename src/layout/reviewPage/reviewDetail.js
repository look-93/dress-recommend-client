import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import ReviewMessage from "./reviewMessage";

export default function ReviewDetail() {
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={2} columns={16} sx={{ margin: 5 }}>
        <Grid item xs={8}>
          <Card sx={{ width: 330 }}>
            <CardMedia
              component="img"
              height="420"
              image="https://source.unsplash.com/random"
              alt="unsplash image"
            />
          </Card>
        </Grid>
        <Grid item xs={8}>
          <ReviewMessage />
        </Grid>
      </Grid>
    </Container>
  );
}
