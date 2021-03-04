import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl'; 
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ActivityRapportImage from '../ActivityRapportImage/ActivityRapportImage';

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


const ActivityMoment = () => {
    const classes = useStyles();

    return (
        <Box style={{ paddingLeft: '3em' }}>
        <Grid container justify="center">
          <Grid item md={5} xs={12}>
            <Box
              style={{
                overflow: 'visible',
                lineHeight: 2,
                textAlign: 'left',
                fontFamily: 'Bahnschrift',
                fontStyle: 'normal',
                fontSize: 35,
                // paddingLeft: '2em'
              }}
            >
              <FormattedMessage id="activity.forum.moment" />
            </Box>
            <Box display="flex" position="relative">
              <img id="ID11" src="ID12@2x.png" />
            </Box>{' '}
            <br />
            <Box
              style={{
                overflow: 'visible',
                textAlign: 'left',
                fontFamily: 'Bahnschrift',
                fontStyle: 'normal',
                fontSize: 25,
              }}
            >
              Discours d'ouverture
            </Box>
          </Grid>
          <Grid item md={6} xs={12} className="gridID12">
            <Grid container spacing={3}>
              <Grid item md={5} xs={6}>
                <Box display="flex" position="relative">
                  <img id="video" src="ID12@2x.png" />
                </Box>
                <Box
                  style={{
                    overflow: 'visible',
                    textAlign: 'left',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontSize: 20,
                  }}
                >
                  Lorem ispum dolor
                </Box>
              </Grid>
              <Grid item md={5} xs={6}>
                <Box display="flex" position="relative">
                  <img id="video" src="ID12@2x.png" />
                </Box>
                <Box
                  style={{
                    overflow: 'visible',
                    textAlign: 'left',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontSize: 20,
                  }}
                >
                  Lorem ispum dolor
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={5} xs={6}>
                <Box display="flex" position="relative">
                  <img id="video" src="ID14@2x.png" />
                </Box>
                <Box
                  style={{
                    overflow: 'visible',
                    textAlign: 'left',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontSize: 20,
                  }}
                >
                  Lorem ispum dolor
                </Box>
              </Grid>
              <Grid item md={5} xs={6}>
                <Box display="flex" position="relative">
                  <img id="video" src="ID14@2x.png" />
                </Box>
                <Box
                  style={{
                    overflow: 'visible',
                    textAlign: 'left',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontSize: 20,
                  }}
                >
                  Lorem ispum dolor
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    )
}

export default ActivityMoment;
