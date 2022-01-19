import {this_user} from '/js/modules/this_user.js'

const ID_SPANS = document.querySelectorAll('span.id')

!this_user.adm ? ID_SPANS.forEach(id => id.classList.add('hide')) : false