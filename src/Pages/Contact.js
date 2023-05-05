import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button, IconButton } from '@material-ui/core';
import { Send, Room, Phone, Email } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  topic: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  details: {
    marginBottom: theme.spacing(4),
  },
  messageBox: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Contacts = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Grid container spacing={6} className={classes.container}>
      <Grid item xs={12} md={6}>
        <div className={classes.details}>
          <Room className={classes.icon} />
          <Typography variant="subtitle1">Address</Typography>
          <Typography variant="body1">Dhanmondi 32</Typography>
          <Typography variant="body1">Dhaka</Typography>
        </div>
        <div className={classes.details}>
          <Phone className={classes.icon} />
          <Typography variant="subtitle1">Phone</Typography>
          <Typography variant="body1">+0198 9893 5647</Typography>
          <Typography variant="body1">+0196 3434 5678</Typography>
        </div>
        <div className={classes.details}>
          <Email className={classes.icon} />
          <Typography variant="subtitle1">Email</Typography>
          <Typography variant="body1">pritylata@gmail.com</Typography>
          <Typography variant="body1">info.@gmail.com</Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" className={classes.topic}>
          Send us a message
        </Typography>
        <Typography variant="body1">
          If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Message"
            margin="normal"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes.messageBox}
          />
          <Button type="submit" variant="contained" color="primary" className={classes.button} startIcon={<Send />}>
            Send Now
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contacts;