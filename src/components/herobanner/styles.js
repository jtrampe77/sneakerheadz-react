import styled from "styled-components";
import img from '../../img/bg.jpg'

const HeroBannerStyles = styled.div`
    height: 30vh;
    text-align: center;
    border-bottom:1px solid black;
    display:flex;
    justify-content:center;
    align-items: center;
    background: url(${img}), black;
    background-position:center;
    background-repeat:no-repeat;
    background-size: 30%;
`;

export{HeroBannerStyles}