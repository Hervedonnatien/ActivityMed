import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(1, 1, 1, 5),
      padding: theme.spacing(2),
      margin: theme.spacing(3),
      height: 250,
      [theme.breakpoints.down('xs')]: {
        padding: 0,
        margin: 0,
      },
    },
    card: {
      width: '100%',
      boxShadow: 'none',
      position: 'relative',
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
    primary: {
      fontstyle: 'normal',
      fontSize: '1rem',
      fontFamily: 'Bahnschrift',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
    avatar: {
      width: '50%',
      height: 'auto',
    },
    item: {
      margin: 'auto',
      display: 'flex',
    },
  })
);
interface IProps {
  talk: string;
  name: string;
}
const Motiv: FC<IProps> = ({ name, talk }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box height={140}>
          <Typography align="justify">
            <FormattedMessage id={talk} />
          </Typography>
        </Box>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt="prof11"
                src="prof11.png"
                srcSet="prof11.png 1x, prof11@2x.png 2x"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className={classes.primary}>
                  <FormattedMessage id={name} />
                </Typography>
              }
              // secondary={
              //   <React.Fragment>
              //     <Typography
              //       component="span"
              //       variant="body2"
              //       color="textSecondary"
              //     >
              //       consectetur adipisicing
              //     </Typography>
              //   </React.Fragment>
              // }
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
export default Motiv;
