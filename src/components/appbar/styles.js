import styled from 'styled-components';

const AppBarStyles = styled.nav`
  padding: 1rem 4rem;
  background-color: black;
  position: sticky;
  top: 0%;
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

  &:hover{
    color:red;
  }
  
`;

const AppBarDiv = styled.div`
  display:flex;
  
`;

const AppBarImg =styled.img`
  width:70%;
  @media screen and (min-width:900px) {
    width:20%;
  }
`;


export {AppBarStyles, AppBarItems, AppBarItem, AppBarDiv,AppBarImg}