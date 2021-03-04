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


const ActivityStatistique = () => {
    const classes = useStyles();

    return (
    <Box style={{ marginTop: '2em' }}>
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={11}>
            <Grid container justify="center">
              <Grid item md={3} xs={6}>
                <Box
                  style={{
                    overflow: 'visible',
                    textAlign: 'center',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontSize: 35,
                    color: 'red',
                  }}
                >
                  500
                </Box>{' '}
                <br />
                <Typography className={classes.diversText}>
                  Participants
                </Typography>
              </Grid>
              <Grid item md={3} xs={6}>
                <Box
                  style={{
                    overflow: 'visible',
                    textAlign: 'center',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontSize: 35,
                    color: 'red',
                  }}
                >
                  200
                </Box>{' '}
                <br />
                <Typography className={classes.diversText}>
                  Entreprises
                </Typography>
              </Grid>
              <Grid item md={3} xs={6}>
                <Box
                  style={{
                    overflow: 'visible',
                    textAlign: 'center',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontSize: 35,
                    color: 'red',
                  }}
                >
                  20
                </Box>{' '}
                <br />
                <Typography className={classes.diversText}>
                  Partenaires et exposants
                </Typography>
              </Grid>
              <Grid item md={3} xs={6}>
                <Box
                  style={{
                    overflow: 'visible',
                    textAlign: 'center',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontSize: 35,
                    color: 'red',
                  }}
                >
                  12
                </Box>{' '}
                <br />
                <Typography className={classes.diversText}>
                  Conférences et atelier
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
}

export default ActivityStatistique;
