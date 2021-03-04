import { Box } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import History from '../LandingPage/History/History';
import Parallax from '../Paralax/Paralax';

const Home = () => {
  return (
    <>
      <Box>
        <History />
      </Box>
    </>
  );
};
export default Home;
