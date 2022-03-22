import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js';

export default class IdSpan {
    constructor() {
        this.permission = BOOLEAN_PERMISSION('adm') && BOOLEAN_PERMISSION('editor');
        this.spans = document.querySelectorAll('span.id');
        this.hideClass = 'hide';
    }

    hideIds() {
        if (!this.permission) {
            this.spans.forEach((span) => span.classList.add(this.hideClass));
        }
    }

    init() {
        this.hideIds();
    }
}
