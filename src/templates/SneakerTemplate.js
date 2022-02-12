import {ref} from 'firebase/database'
import {db} from '../libs/firebase/firebaseConfig'

function sneakerTemplate({ sneakerName, key, sneakerPrice, imageUrl, size }) {

    const template = `
    <div class="card" data-key="${key}">
        <img src="${imageUrl}" alt="${sneakerName}">
        <h3>${sneakerName}</h3>
        <p>Size (US MENS): ${size}</p>
        <h4>$${sneakerPrice}</h4>
        <div class="sneakerButtons">
            <button id="editSneaker" class="card-btn" href="#" data-key="${key}">EDIT</button>
            <button id="deleteSneaker" class="card-btn" href="#" data-key="${key}">DELETE</button>
        </div>
    </div>
    `

    const element = document.createRange().createContextualFragment(template).children[0]

   

    return element
}

export {sneakerTemplate}