import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import CreateContact from './contact/CreateContact';


const Menu = () => {

   
    return (
        <>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <CreateContact/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <a href='#'>
                        Contacts
                    </a>
                </ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </>
    )
}
export default Menu;
