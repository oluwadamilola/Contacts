import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { usersContact } from '../../api/data';
import CreateContactForm from './CreateContactForm';
import ContactTable from './ContactTable';
import EditContactForm from './EditContactForm';

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
  const initialFormState = { id: null, firstname: '', lastname: '', email: '', phonenumber: '' }
  const [activeContact, setActiveContact] = useState(initialFormState)
  const editContact = (contact) => {
    setEditing(true)
    setActiveContact({ id: contact.id, firstname: contact.firstname, lastname: contact.lastname, email: contact.email, phonenumber: contact.phonenumber })
  }

  //function to update contact
  const updateContact = (id, updateContact) => {
    setEditing(false)
    setContacts(contacts.map((contacts.id == id ? updateContact : contacts)))
  }

  return (
    <>

      <Container>
        <Col xs="7">
          <ContactTable contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
        </Col>
        {editing ? (
          <Row>
            <Col xs="4">
              <EditContactForm
                setEditing={setEditing}
                activeContact={activeContact}
                updateContact={updateContact}
              />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs="4">
              <CreateContactForm createContact={createContact} />
            </Col>
          </Row>
        )}
      </Container>


    </>
  )
}

export default Contacts