import { useState, useEffect } from 'react';
import {ref, get} from 'firebase/database';
import {db} from 'libs/firebase/firebaseConfig';


function useGetAllProducts(){

    const [productData,setProductData] = useState(null)

    useEffect(()=>{
          async function getProductData(){
            const productRef = ref(db, 'products')
            const productSnapshot = await get(productRef)
            setProductData(Object.values(productSnapshot.val()))
  
          }
          getProductData()
    },[])

    return productData

    

}



export {useGetAllProducts}




