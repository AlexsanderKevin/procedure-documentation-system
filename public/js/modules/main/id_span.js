import this_user from '../../modules/this_user.js'
import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js'

export default function hide_ids_from_users(){

    const IS_USER_ADM = BOOLEAN_PERMISSION('adm')
    const IS_USER_EDITOR = BOOLEAN_PERMISSION('editor')
    const ID_SPANS = document.querySelectorAll('span.id')
    
    if(!IS_USER_ADM && !IS_USER_EDITOR)
        ID_SPANS.forEach(span => span.classList.add('hide'))
}