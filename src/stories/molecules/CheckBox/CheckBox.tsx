import React from 'react';
import styled from "styled-components";
import { ButtonProps } from './type';


 const CheckBox : React.FC<ButtonProps>=(props)=>{
  return <ButtonContent {...props} >{props.label}</ButtonContent>
}

export default CheckBox;

export const ButtonContent = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
