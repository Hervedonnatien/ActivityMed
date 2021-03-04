import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import Motiv from './Motiv/Motiv';
const motivationls = [
  {
    name: 'home.motivation.landry.name',
    talk: 'home.motivation.landry.talk',
    avatar: '',
  },
  {
    name: 'home.motivation.gandhi.name',
    talk: 'home.motivation.gandhi.talk',
    avatar: '',
  },
  {
    name: 'home.motivation.einstein.name',
    talk: 'home.motivation.einstein.talk',
    avatar: '',
  },
];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: 'url(ID8.png) ',
      backgroundColor: '#f711008a',
      backgroundBlendMode: 'color-burn',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 'max-content',
      padding: theme.spacing(7),
      [theme.breakpoints.down('xs')]: {
        padding: 0,
        paddingTop: theme.spacing(2),
      },
    },
    title: {
      overflow: 'visible',
      whiteSpace: 'nowrap',
      fontFamily: 'Bahnschrift',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '3rem',
      color: '#FFF',
      marginTop: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    svg: {
      overflow: 'visible',
      width: 86,
      height: 5,
      transform: 'matrix(1, 0, 0, 1, 0, 0)',
      backgroundColor: '#fff',
      [theme.breakpoints.down('sm')]: {
        width: 56,
        height: 3,
      },
      '&.svg_path': {
        overflow: 'visible',
        width: 6,
        height: 5,
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        [theme.breakpoints.down('sm')]: {
          width: 56,
          height: 3,
        },
      },
    },
  })
);

const Motivational = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography align="center" className={classes.title}>
        <FormattedMessage id="home.motivational.title" />
        <br />
        <svg className={classes.svg} viewBox="0 0 86 5">
          <path id="svg_path" d="M 0 0 L 86 0"></path>
        </svg>
      </Typography>
      <Grid container justify="center">
        {motivationls.map((motiv, i) => (
          <Grid key={i} item md={6} sm={10} xs={12} lg={4}>
            <Box p={4}>
              <Motiv name={motiv.name} talk={motiv.talk} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Motivational;
