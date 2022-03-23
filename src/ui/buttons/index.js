import styled from "styled-components";

const Button = styled.button `
    background-color: ${props => props.bgcolor || "transparent"};;
    border:none;
    border-radius: 3px;
    box-shadow: 0 0 3px 1px rgb(220, 220, 220);
    margin: 2rem;
    padding: ${props => props.padding || "0.25rem 2rem"};
    font-weight: ${props => props.fontweight || ""};
    box-shadow: ${props => props.boxshadow || ""};
    border-radius: ${props => props.radius || ""};
    color: ${props => props.color || "black"};
    font-size: ${props => props.size || "1rem"};
 
`;

const IconButton = styled.button`
  border:none;
  background-color:transparent;
`;

const SubmitButton = styled.button`
  width:100%;
  padding:0.75rem 0;
  margin:1.125rem 0 0 0;
  background-color:black;
  color: white;
  font-weight: bold;

  &:hover{
    background-color:red;
  }
`;

export {Button, IconButton, SubmitButton}