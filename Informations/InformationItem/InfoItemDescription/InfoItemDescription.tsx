import React from 'react';
import Typography from '@material-ui/core/Typography';
import useInfoStyles from '../../../../assets/styles/information.styles';
import { RichText } from 'prismic-reactjs';
const InfoItemDescription = ({ text }: any) => {
  const classes = useInfoStyles();
  return (
    <Typography className={classes.itemDescription} component="div">
      <RichText render={text} />
    </Typography>
  );
};
export default InfoItemDescription;
