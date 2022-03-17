import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {HiViewGrid} from 'react-icons/hi';
import {IoMdAddCircleOutline} from 'react-icons/io'


const ProductOptionStyles = styled.ul`
  margin:1rem 2rem;
  /* padding-bottom: 4rem; */
  a{
    color: black;
  }
  a:hover{
    text-decoration:none;
    color: red;
 
  }
  h3{
    text-align:center;
    font-weight:bold;
    font-size:1.2rem;
  }
  li{
    padding: 1rem 2rem;
    display:flex;
    gap: 1rem;
    align-items:center;
  }
`;

function ProductOptions(props) {
  return (
    <>
  
    <ProductOptionStyles>
    <h3>Products</h3>
        <Link to="/dashboard">
          <li>
              <HiViewGrid size="1rem" />
              All Sneakerz
          </li>
        </Link>

        <Link to="add">
        <li>
            <IoMdAddCircleOutline size="1rem" />
            Add Sneakerz
        </li>

        </Link>
    </ProductOptionStyles>
    </>
  )
}

export default ProductOptions