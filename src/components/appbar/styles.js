import styled from 'styled-components';

const AppBarStyles = styled.nav`
box-shadow: 0 0 2px 1px grey;
padding: 1rem 4rem;
background-color: black;

`;

const AppBarItems = styled.ul`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:80%;
  margin: 0 auto;
`;

const AppBarItem = styled.li`
  color: white;
  margin-right:1rem;
`;

const AppBarDiv = styled.div`
  display:flex;
  
`;


export {AppBarStyles, AppBarItems, AppBarItem, AppBarDiv}