import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CompanyContent from './CompanyContent/CompanyContent';
import CompanyPhotos from './CompanyPhotos/CompanyPhotos';
const CompanyView = () => {
  return (
    <Box>
      <Grid container justify="center" alignItems="center">
        <Grid item md={6}>
          <CompanyContent />
        </Grid>
        <Grid item md={6}>
          <CompanyPhotos />
        </Grid>
      </Grid>
    </Box>
  );
};
export default CompanyView;
