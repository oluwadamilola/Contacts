import React from 'react'
import {Table } from 'react-bootstrap'



 const ContactTable = (props) => {
    return (

            <Table hover variant="white">
                <thead>
      <tr>
        <th>Firstname</th>
        <th>username</th>
        <th>email</th>
        <th>phonenumber</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
        {props.contacts.map(item => {
            const {id,firstname,lastname,email, phonenumber} =  item;
        return(
            <tr key={id}>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{phonenumber}</td>
            <td>
            <button onClick={() => props.deleteContact(id)} >Delete</button>
              <button  onClick={()=>props.editContact(item)}   className="button muted-button">Edit</button>
            </td>
          </tr>
        );
        })}
    </tbody>
  </Table>
)}
export default ContactTable;