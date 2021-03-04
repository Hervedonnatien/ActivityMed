import React from 'react';
import useInfoStyles from '../../../../assets/styles/information.styles';

const InfoItemImage = ({ image }: any) => {
  const classes = useInfoStyles();
  return (
    <img
      className={classes.itemImage}
      src={image.url}
      //srcSet="info_item_image1.png 1x, info_item_image@2x.png 2x"
      alt={image.alt}
    />
  );
};
export default InfoItemImage;
