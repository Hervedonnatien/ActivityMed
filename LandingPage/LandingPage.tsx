import Grid from '@material-ui/core/Grid';
import React from 'react';
import LeftHeader from '../Layout/Header/LeftHeader/LeftHeader';
import Motivational from '../Motivational/Motivational';
import Parallax from '../Paralax/Paralax';
import Team from '../Team/Team';
import Body from './Layout/Body/Body';
import metting2x from '../../assets/images/meeting@2x.png';
import History from './History/History';
import HomeTitle from './HomeTitle/HomeTitle';
import { Box } from '@material-ui/core';
import Target from './Target/Target';
import SuccessStory from './SuccessStory/SuccessStory';
const LandingPage = () => {
  return (
    <>
      <Parallax filter image={metting2x}>
        <LeftHeader />
        <HomeTitle />
      </Parallax>
      <Box display="block">
        <Grid container justify={'center'}>
          <Grid md={12} xs={12} lg={12} item>
            {/* <Body /> */}
            <History />
          </Grid>
          <Grid md={8} xs={12} lg={8} item>
            {/* <Body /> */}
            <Target />
          </Grid>
          <Grid md={8} xs={12} lg={8} item>
            <Team />
          </Grid>
          <Grid md={10} xs={12} lg={10} item>
            <SuccessStory />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LandingPage;
