import styled from "styled-components";

const StoreFrontStyles = styled.div`
 @media screen and (min-width:900px) {
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    gap: 5rem;
 }
`

const StoreFrontPanels = styled.div`
  
`

const StoreFrontSideBar = styled.div`
 @media screen and (min-width:900px) {
    width: 15%;
 }
`

export{StoreFrontStyles ,StoreFrontPanels, StoreFrontSideBar}