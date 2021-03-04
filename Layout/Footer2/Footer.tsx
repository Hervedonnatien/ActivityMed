import React from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import FbIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      height: 'max-content',
      color: theme.palette.background.paper,
      padding: theme.spacing(4),
    },
    link: {
      color: theme.palette.background.paper,
      fontWeight: 'bold',
      lineHeight: 2,
      fontSize: 22,
    },
    divider: {
      width: 2,
      background: theme.palette.background.paper,
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    icon: {
      margin: 'auto',
    },
    txt: {
      lineHeight: theme.spacing(0.2),
      display: 'flex',
      marginTop: theme.spacing(1),
      fontSize: 19,
    },
    title: {
      fontSize: 20,
      lineHeight: '28px',
    },
    img: {
      width: 80,
      height: 80,
      marginRight: theme.spacing(2),
    },
    address: {
      marginTop: theme.spacing(3),
      fontSize: 19,
      lineHeight: 2,
    },
  })
);
const LINK_LIST = [
  {
    uid: 'footer.home',
    name: '/',
  },
  {
    uid: 'footer.activity',
    name: '/activity',
  },
  {
    uid: 'footer.members',
    name: '/company',
  },
  {
    uid: 'footer.informations',
    name: '/information',
  },
  {
    uid: 'footer.partener',
    name: '/#',
  },
];
const LINK_LIST_2 = [
  {
    uid: 'footer.blog',
    name: '/blog',
  },
  {
    uid: 'footer.contact',
    name: '/contact',
  },
  {
    uid: 'footer.help',
    name: '/#',
  },
  {
    uid: 'footer.about',
    name: '/#',
  },
  {
    uid: 'footer.term',
    name: '/#',
  },
];
const Footer = () => {
  const classes = useStyles();
  console.log('test', LINK_LIST);

  return (
    <Box className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={4} xs={10}>
          <Box display="flex" marginBottom={3}>
            <img
              className={classes.img}
              src="MEDLog.png"
              srcSet="MEDLog.png 1x, MEDLog@2x.png 2x"
            />
            <Box className={classes.title}>
              <span>Club des </span>
              <span style={{ color: 'rgba(190, 18, 12, 1)' }}>
                Entrepreneurs
              </span>
              <br />
              <span>de </span>
              <span style={{ color: 'rgba(190, 18, 12, 1)' }}>MED</span>
              <span>
                (Madagascar <br />
                Entreprises Développement)
              </span>
            </Box>
          </Box>
          <Box className={classes.address}>
            <span>
              Lot 15 bis Rue Patrice Lumumba 4 ème étage
              <br />
              Tsaralalàna - Antananarivo
            </span>
          </Box>
        </Grid>
        <Grid item md={2} xs={10}>
          <Box display="flex" marginBottom={3}>
            <Divider
              orientation="vertical"
              className={classes.divider}
              flexItem
            />
            <Box display="block">
              {LINK_LIST.map((i) => {
                return (
                  <Box>
                    <Link href={i.name} className={classes.link}>
                      <FormattedMessage id={i.uid} />
                    </Link>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>

        <Grid item md={2} xs={10}>
          <Box marginBottom={3}>
            {LINK_LIST_2.map((i) => {
              return (
                <Box>
                  <Link href={i.name} className={classes.link}>
                    <FormattedMessage id={i.uid} />
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid item md={2} xs={10}>
          <Box marginBottom={3}>
            <Box display="flex" marginBottom={3}>
              <FbIcon className={classes.icon} />
              <TwitterIcon className={classes.icon} />
              <InIcon className={classes.icon} />
            </Box>
            <Box className={classes.txt}>
              <Box display="inline-block">
                <PhoneIcon />
              </Box>
              <Box marginLeft={1} display="inline-block">
                +261 34 87 480 08
              </Box>
            </Box>
            <Box className={classes.txt}>
              <Box display="inline-block">
                <MailIcon />
              </Box>
              <Box marginLeft={1} display="inline-block">
                contact.tpe.med@gmail.com
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
