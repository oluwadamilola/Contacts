import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import styled from 'styled-components';
import {SaveButton, CancelButton, InputText,Line} from '../Button'



const CreateContactForm = (props) => {
  const initialFormState = {id:null, firstname:'', lastname:'', email:'', phonenumber:''}
  const [contact, setContact] = useState(initialFormState)
  
  const handleInputChange = (event) =>{
    const {name, value} = event.target

    setContact({...contact, [name]: value})
  }
  return (
    <div>                                                                                                                                                       b
      <form
      onSubmit={event=>{
        event.preventDefault()
        if(!contact.firstname || !contact.lastname || !contact.email || !contact.phonenumber)
        return
        props.createContact(contact)
        setContact(initialFormState)
      }}
      >
    <InputText placeholder='First name' name='firstname' value={contact.firstname} onChange={handleInputChange}/>
    <InputText placeholder='Last name' name='lastname' value={contact.lastname} onChange={handleInputChange}/>
    <InputText placeholder='Email' name='email' value={contact.email} onChange={handleInputChange}/>
    <InputText placeholder='Phone Number' name='phonenumber' value={contact.phonenumber} onChange={handleInputChange}/>
    <SaveButton>Save</SaveButton>
    <CancelButton>Cancel</CancelButton>
    </form>
    </div>
  )
}

export default CreateContactForm