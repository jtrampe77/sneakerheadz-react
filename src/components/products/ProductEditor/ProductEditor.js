import React from 'react';

import {ProductDataEntryForm} from './../ProductDataEntryForm'
import {ProductPreview} from './../ProductPreview'
import {ProductEditorStyles} from './styles'

function ProductEditor ({children, productName, productPrice, productImage, productDescription, handleProductName, handleProductPrice,setProductImage, handleProductDescription, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
           
           <ProductDataEntryForm 
           handleProductName={handleProductName} 
           handleProductPrice={handleProductPrice}
           setProductImage={setProductImage}
           handleProductDescription={handleProductDescription}
           />
           <ProductPreview 
           productImage={productImage}
           productName={productName} 
           productPrice={productPrice}
           productDescription={productDescription}
           />

        </ProductEditorStyles>
  )
}

export default ProductEditor