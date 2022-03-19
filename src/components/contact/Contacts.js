import React, { useState } from 'react';
import ContactTable from './ContactTable';
import Menu from '../Menu';
import { Row, Col } from 'react-bootstrap';
import ContactList from './ContactList';

const Contacts = () => {
    const usersContact = [
      { id: 1, firstname: 'Tania', lastname: 'floppydiskette', email:'dammykoju@gmail', phonenumber:'07038246997' },
      { id: 2, firstname: 'Craig', lastname: 'siliconeidolon',email:'dammykoj@gmail', phonenumber:'07038246997' },
      { id: 3, firstname: 'Ben', lastname: 'benisphere', email:'dammykojuu@gmail', phonenumber:'07038246997' },
    ]
  
    const [contacts, setContact] = useState(usersContact)
  return (
    <>
  
        <Row>
          <Col xs="3"><Menu /></Col>
          <Col xs="4">
            <ContactList contacts= {contacts} />
            </Col>
        </Row>
   

    </>
  )
}

export default Contacts