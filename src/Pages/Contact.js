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
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fa fa-map-marker-alt" />
            <div className="topic">Address</div>
            <div className="text-one">Dhanmondi 32</div>
            <div className="text-two">Dhaka</div>
          </div>

          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+0198 9893 5647</div>
            <div className="text-two">+0196 3434 5678</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">pritylata@gmail.com</div>
            <div className="text-two">info.@gmail.com</div>
          </div>
        </div>

        <div className="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-box massage-box">
            <input type="text" placeholder="Add a message" />
          </div>

          <div class="button">
          <input type="button" value="Send Now"/>
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