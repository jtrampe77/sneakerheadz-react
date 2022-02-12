import styled from "styled-components";

const PanelsStyles = styled.div`
    width: 90%;
    margin: 3rem auto;
 @media screen and (min-width:900px) {
        
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        margin: 0;
 }
`

const Panel = styled.div`
    
    padding: 4rem 3rem;
    box-shadow: 0px 0px 4px rgba(255, 0, 0, 0.8), 0 0px 3px #000000;
    text-align: center;
    margin-bottom: 3rem;

    @media screen and (min-width:900px) {
        width:22%;
    }
`




export{PanelsStyles, Panel}

