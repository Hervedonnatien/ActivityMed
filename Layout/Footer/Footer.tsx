import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Contact from './Contact/Contact';
import Localisation from './Loalisation/Localisation';
import ContactUs from './ContactUs/ContactUs';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: 'url(ID78334964_132572594834401_579@2x.png) ',
      backgroundColor: '#0000008a',
      backgroundBlendMode: 'color-burn',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 'max-content',
      padding: theme.spacing(7),
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1),
      },
    },
  })
);
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item md={8} sm={10} xs={12}>
          <Contact />
          <Box>
            <Localisation />
          </Box>
        </Grid>
        <Grid item md={4} sm={10} xs={12}>
          <ContactUs />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
