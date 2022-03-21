export default class AddModal {
    constructor(target) {
        this.modal = document.querySelector('#edition_modal');
        this.target = target;
        this.form = document.querySelector(`#add_${target}_form`);
        this.cancelButton = this.form.querySelector('.cancel_button');
        this.activeClass = 'show';
    }

    closeModal() {
        this.modal.classList.remove(this.activeClass);
        this.form.classList.remove(this.activeClass);
    }

    addCloseEvent() {
        this.cancelButton.addEventListener('click', () => this.closeModal());
    }

    openModal(options) {
        this.modal.classList.add(this.activeClass);
        if (options.value === this.target) {
            this.form.classList.add(this.activeClass);
        }
    }

    addOpenEvent() {
        const addOptions = document.querySelector('#add_options_container');
        addOptions.addEventListener('change', () => {
            this.openModal(addOptions);
        });
    }

    init() {
        this.addCloseEvent();
        this.addOpenEvent();
    }
}
