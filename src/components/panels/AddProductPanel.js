
import React from 'react'
import {PanelsStyles, PanelHeader, PanelBody} from './styles'

import {AddProduct} from 'components/products/widgets/AddProduct'

function AddProductPanel({title, ...props}) {
  return (
    <>
      <PanelsStyles>
        <PanelHeader>
          <h2>{title || "Panels"}</h2>
        </PanelHeader>

        <PanelBody>

          <AddProduct />

        </PanelBody>
      </PanelsStyles>
    </>
   
  )
}

export default AddProductPanel