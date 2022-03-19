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
        <th>Actions</th>
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
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        );
        })}
    </tbody>
  </Table>
)}
export default ContactTable;