import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import PlaceIcon from '@material-ui/icons/Place';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(3),
      color: theme.palette.background.paper,
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1),
      },
    },
    title: {
      fontWeight: 'bold',
      fontSize: '2rem',
      fontStyle: 'normal',
      color: theme.palette.background.paper,
      whiteSpace: 'nowrap',
      display: 'flex',

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
    txt: {
      lineHeight: 2,
      display: 'flex',
      marginTop: theme.spacing(1),
      fontStyle: 'normal',
      fontSize: '1.4rem',
      borderSpacing: theme.spacing(8),
      margin: 'auto',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.2rem',
      },
    },
  })
);
const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        <FormattedMessage id="footer.contact.title" />
        <svg className={classes.svg} viewBox="0 0 608 5">
          <path id="svg_path" d="M 608 0 L 0 0"></path>
        </svg>
      </Typography>
      <Box display="block">
        <Box className={classes.txt} component="div">
          <Box marginRight={2} display="inline-block">
            <PlaceIcon />
          </Box>
          <Box display="inline-block">
            Lot 15 bis Rue Patrice Lumumba 4 ème étage Tsaralalàna -
            Antananarivo
          </Box>
        </Box>
        <Box className={classes.txt} component="div">
          <Box marginRight={2} display="inline-block">
            <PhoneIcon />
          </Box>
          <Box display="inline-block">+261 34 87 480 08 /+261 34 51 259 34</Box>
        </Box>
        <Box className={classes.txt} component="div">
          <Box marginRight={2} display="inline-block">
            <MailIcon />
          </Box>
          &nbsp; &nbsp;
          <Box display="inline-block">contact.tpe.med@gmail.com</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
