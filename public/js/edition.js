import EditionOperation from './modules/edition/edition-operation.js';
import EditionHeader from './modules/edition/edition-header.js';
import AddModal from './modules/edition/add-modal.js';
import handleUpdateForms from './modules/edition/handle-update-forms.js';

const editionHeader = new EditionHeader();
editionHeader.init();

const deleteMode = new EditionOperation('#main_delete_button', '.delete_button_container');
deleteMode.init();

const updateMode = new EditionOperation('#main_edit_button', '.edit_section');
updateMode.init();

const targetContents = [
    'section',
    'procedure',
    'subsection',
    'solution',
    'issue',
    'obs',
];

targetContents.forEach((target) => {
    const addModal = new AddModal(target);
    addModal.init();
});

handleUpdateForms();
