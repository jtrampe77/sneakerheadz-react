import styled from 'styled-components';



const ProductCardStyles  = styled.div`
     max-width:23%;
    padding: 3rem 2rem;
    box-shadow: 2px 0 4px 0 black;
    text-align: center;
    margin-bottom: 3rem;

    h3{
        font-size: 1.2rem;
        font-weight: bold;
    }
    h4{
        font-size: 1rem;
        font-weight:500;
        margin-bottom: 3rem;
    }
    button{
        color: white;
        background-color: red;
        padding: 1rem 2rem;
        border-radius: 5px;
    }
    button:hover{
        text-decoration: none;
        color: red;
        background-color: black;
        font-weight: bold;
    }
    .sneakerButtons {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
    }
    .productSize{
        font-weight:500;
    }
    .productDescription{
        padding:2rem 0;
        font-style: italic;
    
    }

`;

export {ProductCardStyles}