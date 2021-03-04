import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
    },
    img: {
      width: '100%',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 14,
      color: theme.palette.secondary.main,
    },
    text: {
      fontSize: 14,
      color: theme.palette.secondary.main,
    },
  })
);
interface IProps {
  image: string;
  name: string;
  fonction: string;
  contact: string;
  mail: string;
}
const TeamItem: FC<IProps> = ({ image, name, fonction, contact, mail }) => {
  const classes = useStyle();
  return (
    <Box className={classes.root} display="flex">
      <Box marginRight={2}>
        <img className={classes.img} src={image} alt={name} />
      </Box>
      <Box margin="auto">
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.text}>{fonction}</Typography>
        <Typography className={classes.text}>{mail}</Typography>
        <Typography className={classes.text}>{contact}</Typography>
      </Box>
    </Box>
  );
};
export default TeamItem;
