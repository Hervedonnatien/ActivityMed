import React from 'react';
import Box from '@material-ui/core/Box';
import useCompanyDetailStyles from '../../../../../assets/styles/companyDetail.style';
import { Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import LocateIcon from '@material-ui/icons/LocationCity';
import PhoneIcon from '@material-ui/icons/Phone';
import FbIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';

const CONTACT = [
  {
    text: 'Lot IVH 31 Mandialaza Ambatomitsangana Antananarivo 101',
    icon: <LocateIcon />,
  },
  {
    text: 'IKOLO',
    icon: <FbIcon />,
  },
  {
    text: '034 50 805 02',
    icon: <PhoneIcon />,
  },
  {
    text: 'ikoloanigasikara@gmail.com',
    icon: <MailIcon />,
  },
];
const CompanyContact = () => {
  const classes = useCompanyDetailStyles();
  return (
    <Box>
      <Box display="flex" justifyContent="center" marginTop={3}>
        <svg className={classes.lineSvg} viewBox="0 0 80 2">
          <path className={classes.linePath} d="M 80 0 L 0 0"></path>
        </svg>
        <Typography className={classes.contact}>
          <FormattedMessage id="company.contact" />
        </Typography>
        <svg className={classes.lineSvg} viewBox="0 0 80 2">
          <path className={classes.linePath} d="M 80 0 L 0 0"></path>
        </svg>
      </Box>
      <Box>
        <Grid container justify="center">
          {CONTACT.map((c) => (
            <Grid md={6} key={c.text} item>
              <Box className={classes.contacttxt}>
                <Box display="inline-block">{c.icon}</Box>
                <Box marginLeft={1} display="inline-block">
                  {c.text}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default CompanyContact;
