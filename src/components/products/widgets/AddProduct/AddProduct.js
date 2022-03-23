import React, {useState} from 'react';

import { useAddNewProduct } from 'hooks/useAddNewProduct';
import {AddProductStyles,AddProductHeader} from './styles'
import {ProductEditor} from 'components/products/ProductEditor'
import {useNumberFormat} from 'hooks/useNumberFormat'
import ProductPreview  from 'img/8k1.jpg';
import {EditorFeedBack} from 'components/products/EditorFeedBack'

const defaults={
  description:'The best shoes out there!',
  name:'Sneaker Name',
  price:'200'
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [productDescription, setProductDescription] = useState(defaults.description)
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
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
    
  }

  if(isWriting){
    return <EditorFeedBack status={loading} writeCompleted={setIsWriting} />
  }else{
    return(
        <AddProductStyles  {...props}>

          <AddProductHeader>Upload Your Sneaker Here</AddProductHeader>
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