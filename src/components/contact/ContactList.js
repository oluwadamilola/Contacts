// import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';


// const ContactList = props => {
//   return (
//     <>
//       <div>
//         <span>ContactList</span>
//       </div>

//       {props.contacts.map(item => {
//         const { id, firstname, lastname } = item;
//         return (
//           <ListGroup key={id}>
//             <ListGroup.Item ><span>{firstname}</span> <span>{lastname}</span>
//               <Button>Edit</Button>
//               <Button onClick={() => props.deleteContact(id)} >Delete</Button>
//             </ListGroup.Item>
//           </ListGroup>
//         )
//       })}

//     </>

//   )
// }

// export default ContactList