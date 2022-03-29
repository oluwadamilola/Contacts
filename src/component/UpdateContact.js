import  { useState, useEffect } from "react";
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserUpdate() {
  const classes = useStyles();

  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:3005"+id)
      .then(res => res.json())
      .then(
        (result) => {
          setFirstName(result.user.firstName)
          setLastName(result.user.lastName)
          setEmail(result.user.email)
          setPhone(result.user.phone)
        }
      )
  }, [id])

  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'phone': phone,
    }
    fetch('http://localhost:3005/contact/new', {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          window.location.href = '/';
        }
      }
    )
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               variant="outlined"
               required
               fullWidth
               id="lastName"
               label="Last Name"
               value={lastName}
               onChange={(e) => setLastName(e.target.value)}
             />
           </Grid>
          
           <Grid item xs={12}>
             <TextField
               variant="outlined"
               required
               fullWidth
               id="email"
               label="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
               variant="outlined"
               required
               fullWidth
               id=""
               label="Phone Number"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
             />
           </Grid>
         </Grid>
         <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
         >
           Update
         </Button>
       </form>
     </div>
     </Container>
  );
}