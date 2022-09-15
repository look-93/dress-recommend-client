import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  Stack,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

export default function Test() {
  return (
    <Box>
      <Grid item xs={12} md={8} mt={12}>
        <Typography variant="h6" gutterBottom align="center">
          Review
        </Typography>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            mt: 2,
            p: 2,
            border: "1px solid grey",
          }}
        >
          <Box sx={{ p: 2, border: "1px solid grey" }}>
            <Stack sx={{ flexDirection: "row" }}>
              <Typography sx={{ p: 2 }}>제목</Typography>
              <TextField sx={{ width: 500 }} />
            </Stack>
          </Box>
          <Box sx={{ p: 2, border: "1px solid grey" }}>
            <Stack sx={{ flexDirection: "row" }}>
              <Typography sx={{ p: 2 }}>평점</Typography>
              {/* <RadioGroup row>
                <FormControlLabel
                  vlaue="a"
                  control={<Radio />}
                  label={<StarIcon fontSize="small" />}
                /> */}
              <FormControlLabel>
                <Radio vlaue="a" size="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
              </FormControlLabel>
              <Box>
                <Radio vlaue="b" size="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
              </Box>
              <Box>
                <Radio vlaue="c" size="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
              </Box>
              <Box>
                <Radio vlaue="d" size="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
              </Box>
              <Box>
                <Radio vlaue="e" size="small" />
                <StarIcon fontSize="small" />
              </Box>
              {/* </RadioGroup> */}
            </Stack>
          </Box>
          <Box sx={{ p: 2, border: "1px solid grey" }}>
            <Stack sx={{ flexDirection: "row" }}>
              <TextField sx={{ width: 580 }} multiline rows={10} />
            </Stack>
          </Box>
          <Box sx={{ p: 2, border: "1px solid grey" }}>
            <Stack sx={{ flexDirection: "row" }}>
              <Typography sx={{ p: 2 }}>첨부파일</Typography>
              <Button
                sx={{ height: 30, mt: 1.5 }}
                component="label"
                variant="outlined"
              >
                파일선택
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Typography sx={{ p: 2 }}>
                여기에 이미지경로나오게할거임
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 3 }}>
        <Stack spacing={1} direction="row">
          <Button sx={{ width: 200 }} variant="contained">
            확인
          </Button>
          <Link to="/surveyResult" style={{ textDecoration: "none" }}>
            <Button sx={{ width: 200 }} variant="outlined">
              취소
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
