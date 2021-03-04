import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useCompanyDetailStyles from '../../../assets/styles/companyDetail.style';
import { FormattedMessage } from 'react-intl';

const CompanyDetailTitle = () => {
  const classes = useCompanyDetailStyles();
  return (
    <Box>
      <Typography className={classes.title}>
        <FormattedMessage id="company.detail.title" />
      </Typography>
    </Box>
  );
};
export default CompanyDetailTitle;
