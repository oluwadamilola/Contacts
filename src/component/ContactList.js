import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function ContactList() {
  const classes = useStyles();
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("")
  useEffect(() => {
    ContactGet()
  }, [])

  // function fetch contact from the api
  const ContactGet = () => {
    fetch('http://localhost:3005')
      .then(res => res.json())
      .then(
        (result) => {
          setContacts(result)
        }
      )
  }

  const UpdateContact = id => {
    window.location = '/update/' + id
  }
  const ContactDelete = id => {
    var data = {
      'id': id
    }
    fetch('http://localhost:3005/' + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result['status'] === 200) {
            setError('contact deleted')
          }
          window.location.reload()

        }
      )
  }
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                contacts
              </Typography>
            </Box>
            <Box>
              <Link to="/create">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contacts.map((user) => (
                  <TableRow key={user.ID}>
                    <TableCell align="right">{user.id}</TableCell>

                    <TableCell align="center">{user.firstName}</TableCell>
                    <TableCell align="left">{user.lastName}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="left">{user.phone}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button onClick={() => UpdateContact(user.id)}>Edit</Button>
                        <Button onClick={() => ContactDelete(user.id)}>Del</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>

  );
}