import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FbIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    card: {
      width: '100%',
      borderRadius: 0,
      boxShadow: 'none',
      position: 'relative',
    },
    cardMedia: {
      margin: 'auto',
      width: '70%',
    },
    body1: {
      fontSize: 16,
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
    cardContent: {
      padding: theme.spacing(2, 4, 0),
    },
    fontion: {
      fontSize: '1rem',
      fontWeight: 'normal',
      color: theme.palette?.text.secondary,
    },
    name: {
      fontstyle: 'normal',
      fontSize: '1.5rem',
      fontFamily: 'Bahnschrift',
      fontWeight: 'normal',
    },
  })
);
interface IProps {
  name: string;
  fonction: string;
  profil: string;
}
const Personnel = ({ fonction, name, profil }: IProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={name}
        image={profil}
        title={name}
        className={classes.cardMedia}
      />
      <CardContent className={classes.cardContent}>
        <Typography align="center" className={classes.name}>
          {name}
        </Typography>
        <Typography align="center" className={classes.fontion}>
          {fonction}
        </Typography>
        <Box marginTop={2} letterSpacing={8} textAlign="center">
          <FbIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Personnel;
