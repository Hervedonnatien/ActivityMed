import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import classes from '*.module.css';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //display: 'flex',
      justifyContent: 'center',
      //  margin: 'auto',
      alignItems: 'center',
      // marginLeft: theme.spacing(3),
      padding: theme.spacing(3),
    },
    img: {
      width: '100%',
      height: 'auto',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '2rem',
      fontStyle: 'normal',
      color: theme.palette.background.paper,
      whiteSpace: 'nowrap',
      display: 'flex',
      marginBottom: theme.spacing(4),

      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4),
        display: 'grid',
      },
    },
    svg: {
      overflow: 'visible',
      width: '100%',
      height: 5,
      transform: 'matrix(1,0,0,1,0,0)',
      margin: 'auto',
      background: theme.palette.background.paper,
      '&.svg_path': {
        fill: 'transparent',
        stroke: 'rgba(255,255,255,1)',
        strokeWidth: 5,
        strokeLinejoin: 'miter',
        strokeLinecap: 'butt',
        strokeMiterlimit: 4,
        shapeRendering: 'auto',
      },
    },
  })
);
const Localisation = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        <FormattedMessage id="footer.location.title" />
        <svg className={classes.svg} viewBox="0 0 608 5">
          <path id="svg_path" d="M 608 0 L 0 0"></path>
        </svg>
      </Typography>
      <img
        className={classes.img}
        src="Carte.png"
        srcSet="Carte.png 1x, Carte@2x.png 2x"
      ></img>
    </Box>
  );
};
export default Localisation;
