import { Box, Grid } from '@material-ui/core';
import React from 'react';
import '../../../assets/styles/css/history.css';
import historyIcon from '../../../assets/images/history.svg';
import { FormattedMessage } from 'react-intl';
const History = () => {
  return (
    <Box className="historyBg">
      <div id="Groupe_63">
        <div id="Groupe_831">
          <img width="100%" src={historyIcon} />
        </div>
      </div>
      <div>
        <p>
          <FormattedMessage id="history.title" />
        </p>
      </div>
      <div className="text_history">
        <p id="Lorem_ipsum_dolor_sit_amet_con_b">
          <FormattedMessage id="history.text" />
        </p>
      </div>
    </Box>
  );
};
export default History;
