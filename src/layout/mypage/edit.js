import { Box, Button, TextField, MenuItem, Container } from '@mui/material';

export default function EditMyPage() {
  <Container maxWidth="sm">
    <Box>
      <TextField
        margin="normal"
        required
        fullWidth
        label="비밀번호"
        type="password"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="비밀번호 확인"
        type="password"
      />
      <TextField margin="normal" required fullWidth label="이름" />
      <TextField margin="normal" required fullWidth label="성별" select>
        <MenuItem value={'F'}>여자</MenuItem>
        <MenuItem value={'M'}>남자</MenuItem>
      </TextField>

      <TextField margin="normal" required fullWidth label="이메일" />
      <TextField margin="normal" required fullWidth label="휴대전화" />
    </Box>
    <Button variant="contained">수정하기</Button>
  </Container>;
}
