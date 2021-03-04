import React from 'react';
import Box from '@material-ui/core/Box';
import InfoLikeBtn from './InfoItemLikeBtn/InfoItemLikeBtn';
import InfoItemCommentBtn from './InfoItemCommentBtn/InfoItemCommenBtn';
import InfoItemShareBtn from './InfoItemShareBtn/InfoItemShareBtn';
import { Grid } from '@material-ui/core';
const InfoItemSocioReact = () => {
  return (
    <Grid container justify="center">
      <Grid xs={4}>
        <Box display="flex" justifyContent="flex-start">
          <InfoLikeBtn />
        </Box>
      </Grid>
      <Grid xs={4}>
        <Box display="flex" justifyContent="center">
          <InfoItemCommentBtn />
        </Box>
      </Grid>

      <Grid xs={4}>
        <Box display="flex" justifyContent="flex-end">
          <InfoItemShareBtn />
        </Box>
      </Grid>
    </Grid>
  );
};
export default InfoItemSocioReact;
