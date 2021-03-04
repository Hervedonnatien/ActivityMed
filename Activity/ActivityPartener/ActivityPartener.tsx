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


const ActivityPartener = () => {
    return (
        <Box>
        <Grid container md={12} xs={12}>
          <Grid item md={2}></Grid>
          <Grid item md={10} xs={12}>
            <Grid container md={12} xs={12}>
              <Grid item md={4} xs={11} justify="center">
                <Box
                  style={{
                    overflow: 'visible',
                    textAlign: 'left',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontSize: 35,
                    color: 'red',
                    paddingTop: '1.5em',
                  }}
                >
                  <FormattedMessage id="activity.forum.partenaire" />
                </Box>
              </Grid>
              <Grid item md={2} xs={6}>
                <Box display="flex" position="relative">
                  <img id="Partenaire" src="partenaire1@2x.png" />
                </Box>
              </Grid>
              <Grid item md={2} xs={6}>
                <Box display="flex" position="relative">
                  <img id="Partenaire" src="Logo-BFV-SG.png" />
                </Box>
              </Grid>
              <Grid item md={2} xs={6}>
                <Box display="flex" position="relative">
                  <img id="Partenaire" src="partenaire2@2x.png" />
                </Box>
              </Grid>
              <Grid item md={2} xs={6}>
                <Box display="flex" position="relative">
                  <img id="Partenaire" src="Telma-logo@2x.png" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
}

export default ActivityPartener;
