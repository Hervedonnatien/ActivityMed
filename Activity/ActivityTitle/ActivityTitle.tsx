import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import { createStyles, makeStyles } from '@material-ui/core';
import InfoTriSelect from '../../Informations/InformationTitle/InfoTriSelect/InfoTriSelect';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
    title: {
      whiteSpace: 'nowrap',
      textAlign: 'left',
      fontFamily: 'Bahnschrift',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '50px',
      color: ' rgba(86,86,86,1)',
      [theme.breakpoints.down('sm')]: {
        fontSize: 30,
      },
    },
    order: {
      'white-space': 'nowrap',
      'line-height': '40px',
      'margin-top': '-5px',
      'text-align': 'left',
      'font-family': 'Bahnschrift',
      'font-style': 'normal',
      'font-weight': 'normal',
      'font-size': '20px',
      color: ' rgba(86,86,86,1)',
      marginRight: theme.spacing(2),
    },
  })
);
const ActivityTitle = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        <FormattedMessage id="activity.title" />
      </Typography>
      <Box flex={1} />
      <Box alignItems="center" display="flex" letterSpacing={5}>
        <Typography className={classes.order}>
          <FormattedMessage id="activity.edition" />
        </Typography>
        <InfoTriSelect />
      </Box>
    </Box>
  );
};
export default ActivityTitle;
