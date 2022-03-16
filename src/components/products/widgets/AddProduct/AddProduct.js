import React, {useState} from 'react';

import {AddProductStyles} from './styles'
import {ProductEditor} from 'components/products/ProductEditor'
import {useNumberFormat} from 'hooks/useNumberFormat'
import ProductPreview  from 'img/8k1.jpg';

function AddProduct ({children, ...props})  {

  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('200')
  const [productImage, setProductImage] = useState(ProductPreview)
  const [productDescription, setProductDescription] = useState('The best shoes out there!')
  const formatter = useNumberFormat()

  function handleProductName(name){
    setProductName(name)
  }

  function handleProductPrice(price){
    setProductPrice(formatter(price))
  }
  
  function handleProductDescription(description){
    setProductDescription(description)
  }

  return (
        <AddProductStyles  {...props}>
           <ProductEditor 
           productName={productName} 
           productPrice={productPrice} 
           productImage={productImage}
           productDescription={productDescription}
           handleProductName={handleProductName} 
           handleProductPrice={handleProductPrice}
           setProductImage={setProductImage}
           handleProductDescription={setProductDescription}
           />

        </AddProductStyles>
  )
}

export default AddProduct