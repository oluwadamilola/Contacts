import React, { useEffect, useState } from 'react'
import { InputText, CancelButton, SaveButton } from '../Button'

export const EditContactForm = (props) => {
  const [contact, setContact] = useState(props.activeContact)

useEffect(() =>{
  setContact(props.activeContact)
}, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setContact({ ...contact, [name]: value })
  }


  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()

          props.updateContact(contact.id, contact)
          setContact()
        }}
      >
        <InputText placeholder='First name' name='firstname' value={contact.firstname} onChange={handleInputChange} />
        <InputText placeholder='Last name' name='lastname' value={contact.lastname} onChange={handleInputChange} />
        <InputText placeholder='Email' name='email' value={contact.email} onChange={handleInputChange} />
        <InputText placeholder='Phone Number' name='phonenumber' value={contact.phonenumber} onChange={handleInputChange} />
        <CancelButton onClick={() => props.setEditing(false)}>Cancel</CancelButton>
        <SaveButton>Save</SaveButton>
      </form>

    </>
  )
}
export default EditContactForm;
