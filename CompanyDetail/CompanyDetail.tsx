import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CompanyDetailTitle from './CompanyDetailTitle/CompanyDetailTitle';
import CompanyView from './CompanyView/CompanyView';
const CompanyDetail = () => {
  return (
    <Box>
      <Grid container justify="center" alignItems="center">
        <Grid item md={10}>
          <CompanyDetailTitle />
        </Grid>
        <Grid item md={10}>
          <CompanyView />
        </Grid>
      </Grid>
    </Box>
  );
};
export default CompanyDetail;
