import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js';

export default class EditionHeader {
    constructor() {
        this.permission = BOOLEAN_PERMISSION('editor');
        this.bgImg = document.querySelector('#edit_bg_img');
        this.header = document.querySelector('#edition_header');
        this.startEditionButton = document.querySelector('#edition_mode_button');
        this.mainUpdateButton = document.querySelector('#main_edit_button');
        this.mainDeleteButton = document.querySelector('#main_delete_button');
        this.updateButtons = document.querySelectorAll('.edit_mode');
        this.deleteButtons = document.querySelectorAll('.delete_button_container');
    }

    toggleActivation() {
        this.bgImg.classList.toggle('hide');
        this.header.classList.toggle('hide');
        this.updateButtons.forEach((button) => button.classList.add('hide'));
        this.deleteButtons.forEach((button) => button.classList.add('hide'));
        this.mainUpdateButton.classList.remove('active');
        this.mainDeleteButton.classList.remove('active');
    }

    addEventToStartButton() {
        this.startEditionButton.addEventListener('click', () => {
            this.toggleActivation();
        });
    }

    init() {
        if (this.permission) {
            this.addEventToStartButton();
        } else {
           this.startEditionButton.remove();
        }
    }
}
