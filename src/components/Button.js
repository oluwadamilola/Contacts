import styled from "styled-components";

export const Button = styled.button`background-color: white;
    height: 48px;
    border-radius: 24px 24px 24px 24px;
    font-family: Google Sans,Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 500;
    letter-spacing: .0178571429em;
    padding-top: 2px;
    padding-right: 24px;
    padding-bottom: 2px;
    padding-left: 24px;
    text-transform: none;`

export const SaveButton = styled.button`
color: #ffffff;
font-size: 1em;
margin: 1em;
padding: 0.25em 3em;
border: 2px solid #ff255e;
border-radius: 10rem;
background-color: #ff355e;
`;

export const CancelButton = styled.button`
color: #ff255e;
font-size: 1em;
margin: 1em;
padding: 0.25em 3em;
border: 2px solid #ff255e;
border-radius: 10rem;
`;
export const Navbar = styled.nav`
display:grid
padding:16px;
width:100%;
background-color: grey;
`;
export const SearchBar = styled.div`
display: grid;
  place-items: center;
`;
export const InputText = styled.input`
display:relative;
  align-items: center;
  width: 50%;
  padding: 12px 20px;
  border-radius: 12px;
  border: 0 2px solid;
`;
export const Wrapper = styled.div`
  color:red
  `;
 export const Input = styled.input`
  box-flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    background-color: transparent;
    border: none;
    display: block;
    font: 400 16px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    height: 24px;
    line-height: 24px;
    margin: 0;
    min-width: 0%;
    outline: none;
    padding: 0;
    z-index: 0;
  `;
  export const Line = styled.hr`
  transform-origin: bottom left;
  `
 
      {/* {editing ? (
      <Container> 
     
        <Row>
         
          <Col xs="7">
            <ContactTable contacts={contacts} deleteContact={deleteContact} editContact={editContact}/>
          </Col>
          ): (
          <CreateContactForm createContact={createContact} />
        </Row>    
      </Container> */}
       