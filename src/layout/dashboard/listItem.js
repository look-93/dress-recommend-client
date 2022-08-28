import { Button, Stack } from "@mui/material";

export default function ListItem() {
  return (
    <Stack sx={{ mt: 2 }}>
      <Button variant="text" disableRipple>
        봄
      </Button>
      <Button variant="text" disableRipple>
        여름
      </Button>
      <Button variant="text" disableRipple>
        가을
      </Button>
      <Button variant="text" disableRipple>
        겨울
      </Button>
    </Stack>
  );
}
