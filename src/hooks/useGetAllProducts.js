import React from 'react';
import { useState, useEffect } from 'react';
import {ref as dataRef, get} from 'firebase/database';
import {db} from 'libs/firebase/firebaseConfig';
import { SneakerTemplate } from 'templates/SneakerTemplate';

function UseGetAllProducts(){

    const [sneakerData, setSneakerData] = useState([])
    

    useEffect(()=>{
        async function loadSneakerData(){
            const sneakerRef = dataRef(db, 'products/');
            const sneakerSnapShot = await get(sneakerRef);
            const data = sneakerSnapShot.val();
            
            setSneakerData(data);       
            console.log(data)
            
        }
        loadSneakerData()
      }, [])

      return (
          <>
            {/* {
                sneakerData.map(({sneakerName, key, sneakerPrice, imageUrl, size})=> <SneakerTemplate sneakerName={sneakerName} key={key} sneakerPrice={sneakerPrice} imageUrl={imageUrl} size={size} />)
            } */}
          </>
      )


    

}



export {UseGetAllProducts}




