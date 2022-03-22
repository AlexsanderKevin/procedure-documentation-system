import emptySubsection from './modules/home/subsection.js';
import Modal from './modules/home/modal.js';
import Burgers from './modules/main/burgers.js';
import HomeButton from './modules/main/home-button.js';

emptySubsection();

const aboutModal = new Modal(
    '.description_modal_container',
    '.description_modal_container',
    '.subsection_about_button',
    '.close_description_modal',
);
aboutModal.init();

const sectionBurgers = new Burgers(
    '.subsection_burger',
    '.item_subsection_content',
    'show_items',
);
sectionBurgers.init();

const homeButton = new HomeButton(['.item_subsection_content'], 'show_items');
homeButton.init();
