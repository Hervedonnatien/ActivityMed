import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
      borderStyle: 'dashed',
      borderWidth: 3,
      borderColor: theme.palette.primary.main,
    },
    img: {
      width: 110,
      height: 141,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 29,
      color: theme.palette.secondary.main,
    },
    text: {
      fontSize: 14,
      color: theme.palette.secondary.main,
      textAlign: 'justify',
    },
  })
);
interface IProps {
  image: string;
  name: string;
  fonction: string;
  message: string;
}
const SuccessStoryItem: FC<IProps> = ({ fonction, image, message, name }) => {
  const classes = useStyle();
  return (
    <Box className={classes.root} display="flex">
      <Box marginRight={2}>
        <img className={classes.img} src={image} alt={name} />
      </Box>
      <Box margin="auto">
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.text}>{fonction}</Typography>
        <Typography className={classes.text}>{message}</Typography>
      </Box>
    </Box>
  );
};
export default SuccessStoryItem;
