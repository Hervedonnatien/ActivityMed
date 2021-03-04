import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Grid, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      lineHeight: 7,
      '& > *': {
        margin: theme.spacing(1, 0),
      },
    },
    btn: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  })
);

interface IProps {
  // onSubmit(): void;
  handleChange(e: any): void;
  name: string;
  firstname: string;
  subject: string;
  message: string;
  email: string;
  phone: string;
  // loading: any;
}
const ContactUsForm = ({
  //onSubmit,
  handleChange,
  name,
  firstname,
  subject,
  message,
  email,
  phone,
}: // loading,
IProps) => {
  const classes = useStyles();
  const disableBtn = Boolean(!name || !subject || !message);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item md={6} sm={12}>
          <TextField
            id="name"
            name="name"
            label={<FormattedMessage id="contact.us.name" />}
            variant="outlined"
            value={name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <TextField
            id="firstname"
            name="firstname"
            label={<FormattedMessage id="contact.us.firstname" />}
            variant="outlined"
            value={firstname}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        id="email"
        onChange={handleChange}
        name="email"
        value={email}
        label={<FormattedMessage id="contact.us.email" />}
        variant="outlined"
      />
      <TextField
        id="phone"
        name="phone"
        onChange={handleChange}
        value={phone}
        fullWidth
        label={<FormattedMessage id="contact.us.phone" />}
        variant="outlined"
      />

      <TextField
        fullWidth
        id="subject"
        onChange={handleChange}
        name="subject"
        value={subject}
        label={<FormattedMessage id="contact.us.object" />}
        variant="outlined"
        required
      />
      <TextField
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        fullWidth
        label={<FormattedMessage id="contact.us.message" />}
        variant="outlined"
        required
        multiline
        rows={4}
      />
      <Button
        disabled={disableBtn}
        className={classes.btn}
        onClick={() => alert('Fonctionalite en cours de developpement')}
        variant="contained"
        color="primary"
      >
        <FormattedMessage id="contact.us.button.send" />
      </Button>
    </form>
  );
};

export default ContactUsForm;
