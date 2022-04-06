import styled from "styled-components";

const PanelsStyles = styled.section`
    flex: 1;
    box-shadow: 0 0 3px 0 black;
    border-radius: 3px;
    margin: 2rem;
`

const PanelBody = styled.div`
    margin: ${props => props.margin || "3rem"};
    /* Product Cards container styles */
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    gap:1rem;
`

const PanelHeader = styled.header`
    background-color: darkred;
    h2{
        padding: 1rem;
        border-radius:3px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        color: white;
        font-weight:bold;
        border-bottom: 1px solid black;
    }
`


export{PanelsStyles, PanelBody ,PanelHeader}

