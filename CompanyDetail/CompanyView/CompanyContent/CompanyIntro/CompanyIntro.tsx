import React from 'react';
import Box from '@material-ui/core/Box';
import classes from '*.module.css';
import useCompanyDetailStyles from '../../../../../assets/styles/companyDetail.style';

const CompanyIntro = () => {
  const classes = useCompanyDetailStyles();
  return (
    <Box className={classes.content}>
      Adepte de la beauté originelle, IKOLO apporte une nouvelle perception sur
      l’exploitation des vertus des produits végétaux Malgaches pour en faire
      des cosmétiques 100% naturels, sans parabènes, et sans additifs
      pétrochimiques. Nos matières premières, formulées à êtres totalement
      vertes, exemples d'engrais chimiques ou de pesticides. Tous nos articles
      sont soigneusement conçus artisanalement, afin de représenter la beauté de
      la nature Malgache. Ikolo apporte une vision où l'on n'a pas besoin de
      gaspiller de l'argent et de la matière pour avoir le luxe du soin au
      naturel.
    </Box>
  );
};
export default CompanyIntro;
