import React from 'react'
import {PanelsStyles, PanelHeader, PanelBody} from './styles'

function AllProductsPanel({title, ...props}) {
  return (
    <>
      <PanelsStyles>
        <PanelHeader>
          <h2>{title || "Panels"}</h2>
        </PanelHeader>

        <PanelBody>

        </PanelBody>
      </PanelsStyles>
    </>
   
  )
}

export default AllProductsPanel