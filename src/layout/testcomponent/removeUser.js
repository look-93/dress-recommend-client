import { Button, SwipeableDrawer, Box } from '@mui/material';
import { useState } from 'react';
import Remove from './remove';

export default function RemoveUser() {
  const [state, setState] = useState(false);
  const getOpenStateHandler = () => {
    setState(true);
  };
  const getCloseStateHandler = () => {
    setState(false);
  };

  return (
    <>
      <Button onClick={getOpenStateHandler}>탈퇴</Button>
      <Box sx={{ width: 'auto' }} role="presentation">
        <SwipeableDrawer
          anchor="bottom"
          open={state}
          onOpen={getOpenStateHandler}
          onClose={getCloseStateHandler}
        >
          <Remove closeHandler={getCloseStateHandler} />
        </SwipeableDrawer>
      </Box>
    </>
  );
}
