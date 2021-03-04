import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useInfoStyles from '../../../../assets/styles/information.styles';
import moment from 'moment';
moment.locale('fr');

// import { Date } from 'prismic-reactjs';
const InfoItemTitle = ({ info }: any) => {
  const classes = useInfoStyles();
  return (
    <Box display="flex">
      <img
        src={info?.data?.avatar.url}
        //srcSet="/Photo-Ministre-1024x726_ed@2x.png"
      />
      <Box paddingLeft={2}>
        <Typography className={classes.itemTitle}>
          {info?.data?.name[0].text}
        </Typography>
        <Box display="flex" margin="auto">
          <svg
            //className="Icon_material-access-time"
            viewBox="3 3 14.042 14.042"
          >
            <path
              style={{
                fill: ' rgba(166,166,166,1)',
              }}
              d="M 10.01406669616699 3 C 6.138426303863525 3 3 6.145447254180908 3 10.02108764648438 C 3 13.896728515625 6.138426303863525 17.04217529296875 10.01406669616699 17.04217529296875 C 13.896728515625 17.04217529296875 17.04217529296875 13.896728515625 17.04217529296875 10.02108764648438 C 17.04217529296875 6.145447254180908 13.896728515625 3 10.01406669616699 3 Z M 10.02108764648438 15.63795852661133 C 6.91776704788208 15.63795852661133 4.404217720031738 13.12440776824951 4.404217720031738 10.02108764648438 C 4.404217720031738 6.91776704788208 6.91776704788208 4.404217720031738 10.02108764648438 4.404217720031738 C 13.12440776824951 4.404217720031738 15.63795852661133 6.91776704788208 15.63795852661133 10.02108764648438 C 15.63795852661133 13.12440776824951 13.12440776824951 15.63795852661133 10.02108764648438 15.63795852661133 Z M 10.37214279174805 6.510543823242188 L 9.318977355957031 6.510543823242188 L 9.318977355957031 10.72319507598877 L 13.00505065917969 12.93484020233154 L 13.53163146972656 12.07124614715576 L 10.37214279174805 10.19661331176758 L 10.37214279174805 6.510543823242188 Z"
            ></path>
          </svg>
          <Typography className={classes.itemMoment}>
            {/* {Date(info?.last_publication_date)} */}
            {moment(new Date(info?.last_publication_date)).fromNow()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default InfoItemTitle;
