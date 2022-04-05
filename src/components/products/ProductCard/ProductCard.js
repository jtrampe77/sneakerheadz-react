import React from 'react';
import {ProductCardStyles} from './styles'
import {ref as databaseRef, remove} from 'firebase/database'
import { db  } from "libs/firebase/firebaseConfig";


function sneakerButtons(card){
    card.querySelector('#editSneaker').addEventListener('click',onEditSneaker)
    card.querySelector('#deleteSneaker').addEventListener('click',onDeleteSneaker)
}

console.log(sneakerButtons)

function onEditSneaker(e){
   const key = e.target.dataset.key
   sessionStorage.setItem('key',key)
   window.location.assign('edit.html')

}

function onDeleteSneaker(e){
    const key = e.target.dataset.key
    sessionStorage.setItem('key',key)
    // window.location.assign('delete.html')

        console.log(key)    
        const removeSneakerRef = databaseRef(db, `sneakers/${key}`)
        remove(removeSneakerRef)

        .then(()=>{
            alert(`Deleted successfully. Refresh Page`)
          })
          .catch((error)=>{
            alert("Deleted successfully. Refresh Page")
          })
    

}


function ProductCard ({product, ...props})  {
  const {productName, uid, productPrice, imageUrl, productSize, productDescription} = {...product}
  return (
        <ProductCardStyles>
          <div className="card" data-key={uid}>
            <img src={imageUrl} alt={productName} />
            <h3>{productName}</h3>
            <p>Size (US MENS): {productSize}</p>
            <p>{productDescription}</p>
            <h4>${productPrice}</h4>
            <div className="sneakerButtons">
                <button id="editSneaker" className="card-btn" href="#" data-key={uid}>EDIT</button>
                <button id="deleteSneaker" className="card-btn" href="#" data-key={uid}>DELETE</button>
            </div>
          </div>

        </ProductCardStyles>
  )
}

export default ProductCard