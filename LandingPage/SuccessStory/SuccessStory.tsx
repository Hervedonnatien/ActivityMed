import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import ProfilImage from '../../../assets/images/IMAGE.png';
import SuccessStoryItem from './SuccessStoryItem/SuccessStoryItem';
const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
    },
    title: {
      fontSize: 50,
      color: 'rgb(86,86,86)',
      textAlign: 'center',
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        fontSize: 35,
      },
    },
  })
);

const SuccessStory = () => {
  const classes = useStyle();
  return (
    <Box style={{ position: 'relative' }} marginTop={6}>
      <Typography className={classes.title}>
        <FormattedMessage id="home.successStory.title" />
      </Typography>
      <Grid container justify="center">
        {[0, 1].map((i) => (
          <Grid key={i} item md={8} sm={10} xs={12}>
            <SuccessStoryItem
              fonction="Fonction"
              name="Alice"
              image={ProfilImage}
              message="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default SuccessStory;
