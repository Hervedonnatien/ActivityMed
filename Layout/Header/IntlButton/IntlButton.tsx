import React, { useContext } from 'react';
import { Context } from '../../../common/Wrapper/Wrapper';
import mgFlag from '../../../../assets/images/intl/mg.png';
import frFlag from '../../../../assets/images/intl/fr.png';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    poper: {
      padding: theme.spacing(2),
    },
    intl: {
      display: 'flex',
      margin: 'auto',
    },
    textfield: {
      borderBottom: 'none',
      background: theme.palette.background.paper,
    },
  })
);
const IntlButton = () => {
  const context = useContext(Context);
  const classes = useStyles();
  let lang = 'mg';
  let flag = mgFlag;
  if (context.locale === 'fr-FR') {
    lang = 'fr';
    flag = frFlag;
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'intl-popover' : undefined;

  return (
    <>
      <TextField
        id="intl-select"
        select
        value={context.locale}
        onChange={context.selectLanguage}
        className={classes.textfield}
      >
        <MenuItem key="fr" value={'fr-FR'}>
          <Box className={classes.intl} component="div">
            <Box marginRight={2} display="inline-block">
              <img width={20} src={frFlag} />
            </Box>
            <Box display="inline-block">FR</Box>
          </Box>
        </MenuItem>
        <MenuItem key="mg" value={'mg-MG'}>
          <Box className={classes.intl} component="div">
            <Box marginRight={2} display="inline-block">
              <img width={20} src={mgFlag} />
            </Box>
            <Box display="inline-block">MG</Box>
          </Box>
        </MenuItem>
      </TextField>
    </>
  );
};
export default IntlButton;
