import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ContactList from './ContactList';
import { usersContact } from '../../api/data';
import CreateContactForm from './CreateContactForm';

const Contacts = () => {
    const [contacts, setContacts] = useState(usersContact)

const createContact = (contact) =>{
  contact.id = contacts.lenth + 1
  setContacts([...contacts, contact])
}






  return (
    <>
  <Container>
        <Row>
          <Col xs="7">
            <ContactList contacts= {contacts} />
            </Col>
            <CreateContactForm createContact ={createContact}/>
        </Row>
        </Container>

    </>
  )
}

export default Contacts