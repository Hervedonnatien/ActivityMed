import React from 'react';
import Typography from '@material-ui/core/Typography';
import useCompanyDetailStyles from '../../../../../assets/styles/companyDetail.style';

const CompanyCEO = () => {
  const classes = useCompanyDetailStyles();
  return (
    <Typography className={classes.ceo}>
      Holiniaina Norohariliva RAKOTOMALALA - Fondatrice
    </Typography>
  );
};
export default CompanyCEO;
