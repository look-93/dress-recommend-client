import {
  Stack,
  TextField,
  Typography,
  Button,
  Box,
  Divider,
} from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ReviewMessage(props) {
  //댓글입력 상태
  const [message, setMessage] = useState('');
  //댓글 입력 후 값이 들어있는지 유효성 검사
  const [isValid, setIsValid] = useState(false);
  //댓글을 담는 배열
  const [comments, setComments] = useState([]);
  //댓글 갯수
  const [commentCnt, setCommentCnt] = useState(0);

  const uPk = sessionStorage.getItem('userPk');

  useEffect(() => {
    getUsedReviewComment();
  }, []);

  const getUsedReviewComment = async () => {
    const r = await axios.get(
      `http://127.0.0.1:8080/review/comment/${props.urPk}`
    );
    //댓글 최신순
    setComments(r.data.reverse());
    //댓글 갯수
    setCommentCnt(r.data.length);
  };

  const submit = async () => {
    await axios.post('http://127.0.0.1:8080/review/addComment/', {
      upk: uPk,
      urPk: props.urPk,
      message: message,
    });
    setMessage('');
    getUsedReviewComment();
  };
  return (
    <Stack component="form" sx={{ pt: 3, width: 330 }} autoComplete="off">
      <Typography variant="button">댓글 {commentCnt}</Typography>

      <Stack direction={'row'}>
        <TextField
          sx={{ pt: 1 }}
          id="standard-basic"
          variant="standard"
          placeholder="댓글을 입력하세요"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyUp={(e) => {
            e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
          }}
        />
        <Button
          disableRipple
          disabled={isValid ? false : true}
          onClick={submit}
        >
          게시
        </Button>
      </Stack>
      <Divider sx={{ pt: 1 }} />
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 150,
          overflow: 'hidden',
          overflowY: 'scroll',
        }}
      >
        {comments.map((comment, index) => (
          <Box key={index}>
            <Stack mt={1}>
              <Typography variant="caption">
                {comment.uid} {comment.createDate}
              </Typography>
            </Stack>
            <Box sx={{ width: 101, height: 50 }}>
              <Typography variant="caption">{comment.message}</Typography>
            </Box>
            <Divider />
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
