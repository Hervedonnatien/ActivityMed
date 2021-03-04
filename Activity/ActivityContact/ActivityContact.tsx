import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl'; 
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


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


const ActivityContact = () => {
    const classes = useStyles();
    return (
        <Box style={{ paddingTop: '2em', paddingLeft: '3em' }}>
        <Grid container justify="center">
          <Grid item md={5} xs={7}>
            <Box className="msg_title">
              <FormattedMessage id="activity.forum.message" />
            </Box>
          </Grid>
          <Grid item md={2} xs={1}>
            <Box style={{ paddingTop: '6em', color: 'rgba(190,18,12,1)' }}>
              <DoubleArrowIcon style={{ fontSize: '4em' }} />
            </Box>
          </Grid>
          <Grid item md={5} xs={4} justify="center">
            <List>
              <ListItem>
                <ListItemIcon style={{ color: 'rgba(190,18,12,1)' }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  className="contact"
                  primary={<FormattedMessage id="activity.phone" />}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ color: 'rgba(190,18,12,1)' }}>
                  <FacebookIcon />
                </ListItemIcon>
                <ListItemText
                  className="contact"
                  primary={<FormattedMessage id="activity.fb" />}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ color: 'rgba(190,18,12,1)' }}>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText
                  className="contact"
                  primary={<FormattedMessage id="activity.mail" />}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ color: 'rgba(190,18,12,1)' }}>
                  <TwitterIcon />
                </ListItemIcon>
                <ListItemText
                  className="contact"
                  primary={<FormattedMessage id="activity.twitter" />}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ color: 'rgba(190,18,12,1)' }}>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText
                  className="contact"
                  primary={<FormattedMessage id="activity.linkedin" />}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

    )
}

export default ActivityContact;
