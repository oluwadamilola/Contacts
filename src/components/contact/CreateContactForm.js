import React from 'react';
import styled from 'styled-components';
import {SaveButton, CancelButton} from '../Button'


const CreateContactForm = () => {

  const Wrapper = styled.div`
  color:red
  `
  const Input = styled.input`
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
  `
  const Line = styled.hr`
  transform-origin: bottom left;
  `
  return (
    <div>CreateContactForm
    <Input placeholder='First name'/>
    <Line/>
    <Input placeholder='Last name'/>
    <Line/>
    <Input placeholder='Email'/>
    <Line/>
    <Input placeholder='Phone Number'/>
    <Line/>
    <SaveButton>Save</SaveButton>
    <CancelButton>Cancel</CancelButton>

    </div>
  )
}

export default CreateContactForm