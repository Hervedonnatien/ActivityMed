import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl'; 
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box_forum_title: {
      backgroundImage:
        'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(ID9.png) ',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      height: 'max-content',
      padding: theme.spacing(10),
      [theme.breakpoints.down('xs')]: {
        padding: 0,
        paddingTop: theme.spacing(2),
      },
    },
    title: {
      overflow: 'visible',
      fontFamily: 'Bahnschrift',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '2.8rem',
      color: '#FFF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    diversText: {
      overflow: 'visible',
      textAlign: 'center',
      fontFamily: 'Bahnschrift',
      fontStyle: 'normal',
      fontSize: 25,
    },
    theme: {
      overflow: 'visible',
      fontFamily: 'Bahnschrift',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '2.5rem',
      color: '#FFF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 70,
    },
  })
);


function ActivityRapportImage() {
    const classes = useStyles();
    return (
        <Grid item md={7} xs={12} className="gridID11">
            <Box display="flex" position="relative">
              <img id="ID11" src="ID11@2x.png" />
            </Box>
        </Grid>
    )
}

export default ActivityRapportImage;
