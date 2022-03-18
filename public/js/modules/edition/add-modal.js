export default class AddModal {
    constructor(target) {
        this.modal = document.querySelector('#edition_modal');
        this.form = document.querySelector(`.add_${target}_form`);
        this.cancelButton = this.form.querySelector('.cancel_button');
        this.activeClass = 'show';
    }

    closeModals() {
        const modals = document.querySelectorAll('.cancel_button');
        modals.forEach((modal) => modal.classList.remove(this.activeClass));
    }

    addCloseEvent() {
        this.cancelButton.addEventListener('click', () => this.closeModals());
    }

    init() {
        this.addCloseEvent();
    }
}
