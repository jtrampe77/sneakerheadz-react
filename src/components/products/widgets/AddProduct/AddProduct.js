import React, {useState} from 'react';

import { useAddNewProduct } from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import {ProductEditor} from 'components/products/ProductEditor'
import {useNumberFormat} from 'hooks/useNumberFormat'
import ProductPreview  from 'img/8k1.jpg';

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('200')
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [productDescription, setProductDescription] = useState('The best shoes out there!')
  const [loading, productLoader] = useAddNewProduct();
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

  function handleSubmit(e){
    e.preventDefault();

    const productData={
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
  }

  if(isWriting){
    return <h1>Editor Feedback Component</h1>
  }else{
    return(
        <AddProductStyles  {...props}>
          <ProductEditor 
          productName={productName} 
          productPrice={productPrice} 
          productImage={productImage}
          productDescription={productDescription}
          handleProductName={handleProductName} 
          handleProductPrice={handleProductPrice}
          handleProductDescription={handleProductDescription}
          setProductImage={setProductImage}
          handleSubmit={handleSubmit}
          />

        </AddProductStyles>
    )
  }
}

export default AddProduct