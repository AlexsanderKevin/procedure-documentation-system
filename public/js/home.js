import empty_subsection from './modules/home/subsection.js';
import Modal from './modules/home/modal.js';

empty_subsection();

const aboutModal = new Modal(
    '.description_modal_container',
    '.description_modal_container',
    '.subsection_about_button',
    '.close_description_modal',
);
aboutModal.init();
