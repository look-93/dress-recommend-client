import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  Stack,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { useState, React } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function MyReview() {
  //surveyResult에서 rpk 전달받음
  const params = useParams();
  //console.log(params.rpk);
  //1번이면 리뷰쓰기 2번이면 수정하기
  //console.log(params.type);

  //rating 상태값
  //라디오그룹안에 벨류값을 가져옴
  const [selectedRatingbtn, setSelectedRatingBtn] = useState('');
  const selectedRationgChange = (e) => {
    setSelectedRatingBtn(e.target.value);
  };

  const [title, setTile] = useState('');
  const changeTitle = (e) => {
    setTile(e.target.value);
  };

  const [contents, setContenets] = useState('');
  const changeContents = (e) => {
    setContenets(e.target.value);
  };

  const [selectedFile, setSelectedFile] = useState('');
  const handlerInputChange = (e) => {
    //하나만업로드할거니까 0번째것만
    setSelectedFile(e.target.files[0]);
  };

  const [rTitle, setRtitle] = useState('');

  //******************************************
  //함수호출해서 2일때 호출값 set에 넣어주기
  const getUsedReviewByRpk = async () => {
    //console.log('호출됨');
    const result = await axios.get(
      'http://127.0.0.1:8080/review/getUsedReviewByRpk/' + params.rpk
    );
    const data = () => {
      setRtitle(result.data.title);
    };
    setTile(rTitle);

    // setTile(result.data.title);
    // setSelectedRatingBtn(result.data.rating);

    // setTile(getUsedReviewByRpkResult.data.title);
    // setSelectedRatingBtn(getUsedReviewByRpkResult.data.rating);
    // setContenets(getUsedReviewByRpkResult.data.contents);
    // const setTileChange = (e) => {
    //   setTile();
    // };
    // const editReview = await axios.post(
    //   'http://127.0.0.1:8080/review/editReview/'
    // );
  };

  if (params.type === '2') {
    getUsedReviewByRpk();
  }

  const SaveOrEdit = () => {
    if (params.type === '1') {
      return (
        <>
          <Link to="/realreview" style={{ textDecoration: 'none' }}>
            <Button
              sx={{ width: 200 }}
              variant="contained"
              onClick={usedReview}
            >
              확인
            </Button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/realreview" style={{ textDecoration: 'none' }}>
            <Button
              sx={{ width: 200 }}
              variant="contained"
              onClick={usedReview}
            >
              수정
            </Button>
          </Link>
        </>
      );
    }
  };

  const usedReview = async () => {
    if (selectedFile !== '') {
      const data = new FormData();
      data.append('imgFile', selectedFile);
      const fileUrlResult = await axios.post(
        'http://localhost:8080/util/uploadFile',
        data,
        {
          //서버로 data 보내면서 헤더에 form-data라고 알려주는 역할
          header: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const myReviewResult = await axios.post(
        'http://localhost:8080/review/myReview/',
        {
          contents: contents,
          rating: selectedRatingbtn,
          fileUrl: fileUrlResult.data,
          title: title,
          rpk: params.rpk,
        }
      );
    }
  };

  return (
    <Box>
      <Grid item xs={12} md={8} mt={12}>
        <Typography variant="h6" gutterBottom align="center">
          Review
        </Typography>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            mt: 2,
            p: 2,
            border: '1px solid grey',
          }}
        >
          <Box sx={{ p: 2, border: '1px solid grey' }}>
            <Stack sx={{ flexDirection: 'row' }}>
              <Typography sx={{ p: 2 }}>제목</Typography>
              <TextField
                sx={{ width: 500 }}
                value={title}
                onChange={changeTitle}
              />
            </Stack>
          </Box>

          <Box sx={{ p: 2, border: '1px solid grey' }}>
            <Stack sx={{ flexDirection: 'row' }}>
              <Typography sx={{ p: 2 }}>평점</Typography>

              <RadioGroup
                row
                value={selectedRatingbtn}
                onChange={selectedRationgChange}
              >
                <Box>
                  <Radio value="5" size="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                </Box>
                <Box>
                  <Radio value="4" size="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                </Box>
                <Box>
                  <Radio value="3" size="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                </Box>
                <Box>
                  <Radio value="2" size="small" />
                  <StarIcon fontSize="small" />
                  <StarIcon fontSize="small" />
                </Box>
                <Box>
                  <Radio value="1" size="small" />
                  <StarIcon fontSize="small" />
                </Box>
              </RadioGroup>
            </Stack>
          </Box>

          <Box sx={{ p: 2, border: '1px solid grey' }}>
            <Stack sx={{ flexDirection: 'row' }}>
              <TextField
                sx={{ width: 580 }}
                multiline
                rows={10}
                value={contents}
                onChange={changeContents}
              />
            </Stack>
          </Box>
          <Box sx={{ p: 2, border: '1px solid grey' }}>
            <Stack sx={{ flexDirection: 'row' }}>
              <Typography sx={{ p: 2 }}>첨부파일</Typography>
              <Button
                sx={{ height: 30, mt: 1.5 }}
                component="label"
                variant="outlined"
              >
                파일선택
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handlerInputChange}
                />
              </Button>
              <Typography sx={{ p: 2 }}>
                {selectedFile !== '' ? selectedFile.name : ''}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 3 }}>
        <Stack spacing={1} direction="row">
          <SaveOrEdit />
          <Link to="/surveyResult" style={{ textDecoration: 'none' }}>
            <Button sx={{ width: 200 }} variant="outlined">
              취소
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
