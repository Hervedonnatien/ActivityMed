import React from 'react';
import Box from '@material-ui/core/Box';
import InfoItemTitle from './InfoItemTitle/InfoItemTitle';
import InfoItemName from './InfoItemName/InfoItemName';
import InfoItemDescription from './InfoItemDescription/InfoItemDescription';
import InfoItemImage from './InfoItemImage/InfoItemImage';
import InfoItemSocioReact from './InfoItemSocioReact/InfoItemSocioReact';
import { Divider, Grid } from '@material-ui/core';
import useInfoStyles from '../../../assets/styles/information.styles';
import InfoItemInputComment from './InfoItemInputComment/InfoItemInputComment';
import InfoItemComment from './infoItemComment/InfoItemComment';
const InformationItem = ({ info }: any) => {
  const classes = useInfoStyles();
  return (
    <Box className={classes.root}>
      <Box p={2}>
        <InfoItemTitle info={info} />
      </Box>
      <Box p={2}>
        <InfoItemName title={info?.data?.title[0].text} />
      </Box>
      <Box p={2}>
        <InfoItemDescription text={info?.data?.description} />
      </Box>
      <Box>
        <InfoItemImage image={info?.data?.image} />
      </Box>
      <Box p={2}>
        <Grid container justify="center">
          <Grid item md={10} xs={12}>
            <Box marginBottom={2}>
              <InfoItemSocioReact />
              <Divider style={{ height: 2 }} />
            </Box>
          </Grid>
          {/* <Grid item md={10} xs={12}>
            <Box marginBottom={2}>
              <InfoItemInputComment />
            </Box>
            <Box marginBottom={2}>
              <InfoItemComment />
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};
export default InformationItem;
