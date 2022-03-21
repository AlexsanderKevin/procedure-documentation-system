import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js';

export default class UpdateForms {
    constructor(updateButtons, forms, contents, closeButtons) {
        this.permission = BOOLEAN_PERMISSION('adm');
        this.buttons = document.querySelectorAll(updateButtons);
        this.forms = document.querySelectorAll(forms);
        this.contents = document.querySelectorAll(contents);
        this.closeButtons = document.querySelectorAll(closeButtons);
        this.hideClass = 'hide';
    }

    toggleForms(index) {
        this.buttons[index].classList.toggle(this.hideClass);
        this.forms[index].classList.toggle(this.hideClass);
        this.contents[index].classList.toggle(this.hideClass);
    }

    openForms() {
        this.buttons.forEach((button, index) => {
            button.addEventListener('click', () => this.toggleForms(index));
        });
    }

    closeForms() {
        this.closeButtons.forEach((button, index) => {
            button.addEventListener('click', () => this.toggleForms(index));
        });
    }

    init() {
        if (this.permission) {
            this.openForms();
            this.closeForms();
        }
    }
}
