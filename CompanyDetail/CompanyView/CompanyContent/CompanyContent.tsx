import React from 'react';
import Box from '@material-ui/core/Box';
import CompanyLogo from './CompanyLogo/CompanyLogo';
import CompanyIntro from './CompanyIntro/CompanyIntro';
import CompanyCEO from './CompanyCEO/CompanyCEO';
import CompanyContact from './CompanyContact/CompanyContact';

const CompanyContent = () => {
  return (
    <Box p={1}>
      <CompanyLogo />
      <CompanyIntro />
      <CompanyCEO />
      <CompanyContact />
    </Box>
  );
};
export default CompanyContent;
