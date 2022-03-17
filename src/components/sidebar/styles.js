import styled from "styled-components";

const SideBarStyles = styled.div`
  
 border-right:1px solid black;
 /* height: 100vh; */
 padding-bottom: 5rem;



`;

const SideBarItems = styled.ul`
 
`;

const SideBarItem = styled.li`
  padding: 1rem 2rem;
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


const SideBarGroup = styled.div`
  border-bottom: 1px solid black;
  padding:1rem 0;
  margin: 1rem 0;
`;

export {SideBarStyles,SideBarItems,SideBarItem, SideBarItemName, SideBarHeader,SideBarGroup}