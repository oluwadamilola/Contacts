import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { usersContact } from '../../api/data';
import CreateContactForm from './CreateContactForm';
import ContactTable from './ContactTable';

const Contacts = () => {
  const [contacts, setContacts] = useState(usersContact)

  //function to add new contact to the list of contacts
  const createContact = (contact) => {
    contact.id = contacts.lenth + 1
    setContacts([...contacts, contact])
  }

  //function to delete existing contacts
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }
//function to edit contact
const [editing, setEditing] = useState(false);
const initialFormState = {id:null, firstname:'', lastname:'', email:'', phonenumber:''}
const [activeContact, setActiveContact] =useState(initialFormState)
const editContact = (contact) =>{
  setEditing(true)
  setCurrentUser({id:contact.id,firstname:contact.firstname, lastname:contact.lastname, email: contact.email, phonenumber:contact.phonenumber })
}
//function to update user


return (
    <>
      <Container> 
        <Row>
          <Col xs="7">
            <ContactTable contacts={contacts} deleteContact={deleteContact} editContact={editContact}/>
          </Col>
          <CreateContactForm createContact={createContact} />
        </Row>
      </Container>

    </>
  )
}

export default Contacts