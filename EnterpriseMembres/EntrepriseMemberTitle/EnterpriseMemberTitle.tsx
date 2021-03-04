import React from 'react';

import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import useEnterpriseMemberStyles from '../../../assets/styles/enterpriseMember.style';

const EnterpriseMemberTitle = () => {
  const classes = useEnterpriseMemberStyles();

  return (
    <Typography className={classes.title}>
      <FormattedMessage id="company.title" />
    </Typography>
  );
};

export default EnterpriseMemberTitle;
