import React from 'react';
import { ListGroup } from 'react-bootstrap';

const handleClick = (e) =>{
    e.preventDefault();  
      console.log('You clicked submit.');
}

const ContactList = (props) => {
  return (
      <>
        <div>ContactList</div>

        {props.contacts.map(item =>{
            const {id, firstname, lastname} = item;
            return(
                <ListGroup key={id}>
                <ListGroup.Item onClick={handleClick}><span>{firstname}</span> <span>{lastname}</span></ListGroup.Item>
              </ListGroup>  
            )
        } )}
 
      </>
  
  )
}

export default ContactList