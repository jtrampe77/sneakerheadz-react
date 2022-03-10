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
  color: black;
  text-decoration:none;
  

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

const SideBarHeader = styled.header`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top: 1rem;
  gap: 0.5rem;

  h2{
    font-size:1.5rem;
    font-weight:bold;
  }
`;

export {SideBarStyles,SideBarItems,SideBarItem, SideBarItemName, SideBarHeader}