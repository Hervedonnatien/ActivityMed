import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import useInfoStyles from '../../../../assets/styles/information.styles';
import { FormattedMessage } from 'react-intl';
const InfoItemInputComment = () => {
  const classes = useInfoStyles();
  return (
    <Box display="flex">
      <Box marginRight={2}>
        <img
          height="60%"
          src="/Photo-Ministre-1024x726_ed.png"
          srcSet="/Photo-Ministre-1024x726_ed.png 1x,Photo-Ministre-1024x726_ed@2x.png 2x"
        />
      </Box>
      <TextField
        multiline
        name="comment"
        fullWidth
        rows={4}
        className={classes.itemCommentInput}
        placeholder="Votre commentaire..."
        // inputProps={{
        //   className: classes.itemCommentInput,
        // }}
      />
    </Box>
  );
};
export default InfoItemInputComment;
