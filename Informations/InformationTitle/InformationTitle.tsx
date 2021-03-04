import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormattedMessage } from 'react-intl';
import useInfoStyles from '../../../assets/styles/information.styles';
import InfoTriSelect from './InfoTriSelect/InfoTriSelect';
const InformationTitle = () => {
  const classes = useInfoStyles();

  return (
    <Box className={classes.titleBox}>
      <Typography className={classes.title}>
        <FormattedMessage id="info.title" />
      </Typography>
      {/* <Box flex={1} />
      <Box alignItems="center" display="flex" letterSpacing={5}>
        <Typography className={classes.order}>
          <FormattedMessage id="info.order.by" />
        </Typography>
        <InfoTriSelect />
      </Box> */}
    </Box>
  );
};
export default InformationTitle;
