import {Button, Input, InputText } from '../components/Button'
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Header = () => {
    return (
<>
<Navbar bg="light">
    <Container>
      <Button>Create Contact</Button>
<InputText placeholder='search'/>
    </Container>
  </Navbar>
        </>
    )
}

export default Header