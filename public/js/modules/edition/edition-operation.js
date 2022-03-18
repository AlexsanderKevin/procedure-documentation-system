import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js';

export default class EditionOperation {
    constructor(mainSelector, buttonsSelector) {
        this.mainButton = document.querySelector(mainSelector);
        this.buttons = document.querySelectorAll(buttonsSelector);
        this.permission = BOOLEAN_PERMISSION('adm');
        this.activeClass = 'active';
        this.hideClass = 'hide';
    }

    activateOperation() {
        this.mainButton.classList.toggle(this.activeClass);
        this.buttons.forEach((button) => button.classList.toggle(this.hideClass));
    }

    addEventToButtons() {
        this.mainButton.addEventListener('click', () => this.activateOperation());
    }

    init() {
        if (this.permission) {
            this.addEventToButtons();
        } else {
            this.mainButton.classList.add(this.hideClass);
        }
    }
}
