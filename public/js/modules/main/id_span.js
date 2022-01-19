import {this_user} from '../../modules/this_user.js'

export default function hide_ids_from_users(){
    const ID_SPANS = document.querySelectorAll('span.id')
    
    if(ID_SPANS)
        this_user.adm === 'false' ? ID_SPANS.forEach(id => id.classList.add('hide')) : false
        this_user.adm === 'false'? ID_SPANS.forEach(id => id.classList.add('hide')) : false
}