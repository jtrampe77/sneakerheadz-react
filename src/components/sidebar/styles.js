import styled from "styled-components";

const SideBarStyles = styled.div`
  
 border-right:1px solid black;

 @media screen and (min-width:900px){
  height: 100vh;
 }


`;

const SideBarItems = styled.ul`
 
`;

const SideBarItem = styled.li`
  padding: 2rem 2rem;
  display:flex;
  align-items:center;

  &:hover{
    background-color:black;
    color: red;
    font-weight: bold;
  }


`;

const SideBarItemName = styled.span`
  margin-left:2rem;
  margin-right:2rem;
`

export {SideBarStyles,SideBarItems,SideBarItem, SideBarItemName}