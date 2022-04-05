import React from 'react'
import { ProductCard } from 'components/products/ProductCard'
import {PanelsStyles, PanelHeader, PanelBody} from './styles'
import { useGetAllProducts } from 'hooks/useGetAllProducts'


function AllProductsPanel({title, ...props}) {


  const productData = useGetAllProducts()



  return (
    <>
      <PanelsStyles>
        <PanelHeader>
          <h2>{title || "Panels"}</h2>
        </PanelHeader>

        <PanelBody>

          {
            productData?
              productData.map(product=><ProductCard key={product.uid} product={product} />)
            : <p>Nothing yet</p>
          }
          
  
        </PanelBody>
      </PanelsStyles>
    </>
   
  )
}

export default AllProductsPanel


