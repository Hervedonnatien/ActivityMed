import React from 'react';
import '../LandingPage/LandingStyle.css';
import Grid from '@material-ui/core/Grid';
import Personnel from './Personnel/Personnel';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import useTeamStyles from '../../assets/styles/team.styles';
import { Box } from '@material-ui/core';
import TeamItem from './TeamItem/TeamItem';
import ProfilImage from '../../assets/images/IMAGE_f.png';
const Team = () => {
  const classes = useTeamStyles();
  return (
    <Box style={{ position: 'relative' }} marginTop={6}>
      <Typography className={classes.title}>
        <FormattedMessage id="home.team.title" />
      </Typography>
      <Grid container justify="center">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Grid key={i} item md={3} sm={6} xs={10}>
            <TeamItem
              fonction="Assistante de Direction"
              name="Ny Kanto ANDRIANTAHIANTSOA"
              image={ProfilImage}
              contact="0345343018"
              mail="nykanto@med.mg"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Team;
