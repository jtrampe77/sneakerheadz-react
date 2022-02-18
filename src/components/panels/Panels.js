import React from 'react'
import {PanelsStyles, Panel,PanelHeading} from '../panels/styles'

function Panels() {
  return (
    <>
    <PanelHeading>Sneakerz Listing</PanelHeading>

     <PanelsStyles>

      <Panel>
      <p>Image</p>
      <h3>J1 Banned</h3>
      <p>Size</p>
      <p>Price</p>
      </Panel>
   

    </PanelsStyles>
 
    </>
   
  )
}

export default Panels