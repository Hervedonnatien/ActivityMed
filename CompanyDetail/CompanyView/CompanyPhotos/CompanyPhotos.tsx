import React from 'react';
import Box from '@material-ui/core/Box';
import imageIk from '../../../../assets/images/IMG_IK.png';

const CompanyPhotos = () => {
  return (
    <Box p={1}>
      <img src={imageIk} alt="company photos" width="100%" />
    </Box>
  );
};
export default CompanyPhotos;
