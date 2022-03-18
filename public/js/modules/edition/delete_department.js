import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js'

export default class DeleteDepartment {
    constructor(mainSelector, buttonsSelector) {
        this.mainButton = document.querySelector(mainSelector);
        this.buttons = document.querySelectorAll(buttonsSelector);
        this.admPermission = BOOLEAN_PERMISSION('adm');
        this.activeClass = 'active';
        this.hideClass = 'hide'
    }

    activateDeleteMode() {
        this.mainButton.classList.toggle(this.activeClass);
        this.buttons.forEach((button) => button.classList.toggle(this.hideClass));
    }

    addEventToButtons() {
        this.mainButton.addEventListener('click', () => this.activateDeleteMode())
    }

    init() {
        if (this.admPermission) {
            this.addEventToButtons();
        } else {
            this.mainButton.classList.add(this.hideClass);
        }
    }
}
