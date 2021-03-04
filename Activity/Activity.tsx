import Box from '@material-ui/core/Box';
import React from 'react';
import LeftHeader from '../Layout/Header/LeftHeader/LeftHeader';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import ActivityBanner from './ActivityBanner/ActivityBanner';
import ActivityStatistique from './ActivityStatistique/ActivityStatistique';
import ActivityPartener from './ActivityPartener/ActivityPartener';
import ActivityRapport from './ActivityRapport/ActivityRapport';
//import ActivityRapportImage from './ActivityRapportImage/ActivityRapportImage';
import ActivityMoment from './ActivityMoment/ActivityMoment';
import ActivityRepresentant from './ActivityRepresentant/ActivityRepresentant';
import ActivityContact from './ActivityContact/ActivityContact';

import './Activity.css';
import ActivityTitle from './ActivityTitle/ActivityTitle';
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

const Activity = () => {
  const classes = useStyles();
  return (
    <>
      <Box className="m_activity-header">
        <div className="up_header">
      {/* <div className="up_header_label_forum">Forum National </div>
      <div className="up_header_label_edition">
        Edition
        <FormControl className={classes.formControl}>
          <Select defaultValue={1} style={{ color: 'rgba(190,18,12,1)' }}>
            <MenuItem value={1}>2021</MenuItem>
          </Select>
        </FormControl>
      </div> */}
          <ActivityTitle />
        </div>

        <ActivityBanner/>

      </Box>


      <ActivityStatistique/>


      <ActivityPartener/>


      <div className="divider"></div>
      <br />


      <ActivityRapport/>


      {/* duplicate */}
     
     <ActivityMoment/>



      <ActivityRepresentant/>
 

      <ActivityContact/>
    </>
  );
};

export default Activity;
