import React from 'react';
import Box from '@material-ui/core/Box';
import useTargetStyles from '../../../assets/styles/target.styles';
import { Grid, Hidden, Typography } from '@material-ui/core';
import TargetCible from '../../../assets/images/svg/targetCible.svg';
import { FormattedMessage } from 'react-intl';
const TARGET_ITEMS = [
  {
    title: <FormattedMessage id="home.target.title" />,
    target: <FormattedMessage id="home.target.one" />,
  },
  {
    title: <FormattedMessage id="home.target.title" />,
    target: <FormattedMessage id="home.target.two" />,
  },
  {
    title: <FormattedMessage id="home.target.title" />,
    target: <FormattedMessage id="home.target.three" />,
  },
  {
    title: <FormattedMessage id="home.target.title" />,
    target: <FormattedMessage id="home.target.four" />,
  },
];
const Target = () => {
  const classes = useTargetStyles();
  return (
    <Box marginTop={6}>
      <Typography className={classes.title}>
        <FormattedMessage id="home.objectif.title" />
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Hidden smDown>
          <Grid md={6} xs={10} item>
            <Box padding={2}>
              <img width="100%" src={TargetCible} alt="Target-cible" />
            </Box>
          </Grid>
        </Hidden>
        <Grid md={6} xs={10} item>
          {TARGET_ITEMS.map((t, i) => (
            <Box key={i}>
              <Typography className={classes.Titre_Objectif_1}>
                {t.title} {1 + i}
              </Typography>
              <Typography className={classes.text}>{t.target}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Target;
