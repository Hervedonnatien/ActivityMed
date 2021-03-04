import React, { useContext, useState } from 'react';
import { Context } from '../../../common/Wrapper/Wrapper';
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
    order: {
      display: 'flex',
      margin: 'auto',
    },
    textfield: {
      borderBottom: 'none',
      background: theme.palette.background.paper,
      fontFamily: 'Bahnschrift',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '30px',
    },
  })
);
const InfoTriSelect = () => {
  const classes = useStyles();
  const [orderBy, setOrderBy] = useState('date');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = () => {};
  const open = Boolean(anchorEl);
  const id = open ? 'order-popover' : undefined;

  return (
    <>
      <TextField
        id="order-select"
        select
        value={orderBy}
        onChange={handleChange}
        className={classes.textfield}
      >
        <MenuItem key="Date" value={'date'}>
          <Box className={classes.order} component="div">
            Date
          </Box>
        </MenuItem>
        <MenuItem key="name" value={'name'}>
          <Box className={classes.order} component="div">
            Nom
          </Box>
        </MenuItem>
      </TextField>
    </>
  );
};
export default InfoTriSelect;
