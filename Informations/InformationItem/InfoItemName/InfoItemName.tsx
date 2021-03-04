import React from 'react';
import Typography from '@material-ui/core/Typography';
import useInfoStyles from '../../../../assets/styles/information.styles';
const InfoItemName = ({ title }: any) => {
  const classes = useInfoStyles();
  return <Typography className={classes.itemName}>{title}</Typography>;
};
export default InfoItemName;
