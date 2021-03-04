import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ContactUsForm from './ContactUsForm/ContactUsForm';
import { Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      marginLeft: theme.spacing(2),
      padding: theme.spacing(3, 4),
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
      },
    },
    title: {
      marginBottom: theme.spacing(3),
      color: theme.palette.primary.main,
      fontSize: '2rem',
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
  })
);
interface IProps {}
interface IContact {
  name: string;
  firstname: string;
  subject: string;
  message: string;
  phone: string;
  email: string;
}
const ContactUs = () => {
  const classes = useStyles();
  const initialContact: IContact = {
    name: '',
    firstname: '',
    subject: '',
    message: '',
    phone: '',
    email: '',
  };
  const [contact, setContact] = useState(initialContact);
  const handleChange = (e: any) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const { name, firstname, subject, email, message, phone } = contact;
  // const client = useApolloClient();

  // const [contactUs, { loading, error }] = useMutation<
  //   contactUs,
  //   contactUsVariables
  // >(CONTACT_US, {
  //   update: (cache) => {
  //     displaySnackBar(cache, {
  //       isOpen: true,
  //       type: 'SUCCESS',
  //       message: 'Votre message a déjà envoyé à Mytsena ',
  //     });
  //   },
  //   onError: () => {
  //     displaySnackBar(client, {
  //       isOpen: true,
  //       type: 'ERROR',
  //       message: 'Une erreur est survenu',
  //     });
  //   },
  // });
  // const onSubmit = () => {
  //   contactUs({
  //     variables: { name, subject, message, email, phone },
  //   }).then(() => setContact(initialContact));
  // };
  // if (error) {
  //   return <ErrorInfo />;
  // }
  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} align="center" variant="h5">
        <FormattedMessage id="contact.us.title" />
      </Typography>
      <Typography variant="body1" align="center">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipisicing elit sed do eiusmod
      </Typography>
      <ContactUsForm
        //onSubmit={onSubmit}
        handleChange={handleChange}
        name={name}
        firstname={firstname}
        subject={subject}
        message={message}
        email={email}
        phone={phone}
        // loading={loading}
      />
    </Paper>
  );
};

export default ContactUs;
