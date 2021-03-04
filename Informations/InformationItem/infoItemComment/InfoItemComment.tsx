import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import useInfoStyles from '../../../../assets/styles/information.styles';
const InfoItemComment = () => {
  const classes = useInfoStyles();
  return (
    <Box>
      <Box>
        <Typography className={classes.itemCommentTitle}>
          <FormattedMessage id="info.item.comment" />
        </Typography>
      </Box>
      <Box>
        {[0, 1, 2, 3].map((i) => (
          <Box marginBottom={2} display="flex">
            <img
              src="/Photo-Ministre-1024x726_ed.png"
              srcSet="/Photo-Ministre-1024x726_ed.png 1x,/Photo-Ministre-1024x726_ed@2x.png 2x"
              height={80}
            />
            <Box paddingLeft={2}>
              <Typography className={classes.itemTitle}>Lorem ispum</Typography>
              <Typography className={classes.itemComment}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default InfoItemComment;
