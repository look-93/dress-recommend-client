import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Box,
  IconButton,
  Button,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState, React } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function SurveyResult() {
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const [datas, setDatas] = useState([]);

  const getMyReviewByPk = async () => {
    const upk = sessionStorage.getItem('userPk');
    const results = await axios.get(
      'http://127.0.0.1:8080/review/myreview/' + upk
    );
    console.log(results);
    setDatas(results.data);
  };

  useEffect(() => {
    getMyReviewByPk();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }} mt={20}>
        <Grid container spacing={{ xs: 6, md: 3 }} justifyContent="center">
          {datas.map((data) => (
            <Grid item key={data.upk}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Grid item sx={{ display: 'flex' }}>
                  <CardHeader title={data.uid} subheader={data.createDate} />
                  <IconButton disableRipple>
                    <CloseIcon />
                  </IconButton>
                </Grid>

                <CardMedia
                  component="img"
                  height="300"
                  image={data.imgUrl}
                  alt="unsplash image"
                />
                <Button disableRipple>리뷰쓰기</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>한줄평</DialogTitle>
        <DialogContent>
          <DialogContentText>
            다른 사용자들에게 의견을 들려주세요.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog> */}
    </Box>
  );
}
