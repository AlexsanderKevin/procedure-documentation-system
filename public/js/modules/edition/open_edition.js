import { get, on_click, close, open, on_change } from '../../../lib/main.js';
import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js';

const IS_USER_EDITOR = BOOLEAN_PERMISSION('editor');

const bgImg = get('#edit_bg_img');
const startEditionButton = get('#edition_mode_button');

const modal = get('#edition_modal');
const cancelButtons = get('.cancel_button');
const header = get('#edition_header');
const addOptions = get('#add_options_container');
const addForms = {
    add_department: get('#add_department_form'),
    add_procedure: get('#add_procedure_form'),
    add_section: get('#add_section_form'),
    add_subsection: get('#add_subsection_form'),
    add_solution: get('#add_solution_form'),
    add_issue: get('#add_issue_form'),
    add_obs: get('#add_obs_form'),
};
const UPDATE_BUTTONS = get('.edit_mode');
const DELETE_BUTTONS = get('.delete_button_container');
const MAIN_UPDATE_BUTTON = get('#main_edit_button');

function openRespectiveModal() {
    const requiredElements = [
        addOptions,
        addForms,
        modal,
    ];
    const requirementsMet = requiredElements.every((element) => element);

    function selectModal() {
        on_change(addOptions, () => {
            open(modal);
            switch (addOptions.value) {
                case 'department': open(addForms.add_department);
                    break;
                case 'procedure': open(addForms.add_procedure);
                    break;
                case 'section': open(addForms.add_section);
                    break;
                case 'subsection': open(addForms.add_subsection);
                    break;
                case 'solution': open(addForms.add_solution);
                    break;
                case 'issue': open(addForms.add_issue);
                    break;
                case 'obs': open(addForms.add_obs);
                    break;
                default: break;
            }
            addOptions.value = '';
        });
    }

    if (requirementsMet) selectModal();
}

function initEditionMode() {
    const requiredElements = [
        startEditionButton,
        bgImg,
        header,
        UPDATE_BUTTONS,
        DELETE_BUTTONS,
        MAIN_UPDATE_BUTTON,
    ];
    const requirementsMet = requiredElements.every((element) => element);

    function clickToStart() {
        on_click(startEditionButton, () => {
            bgImg.classList.toggle('hide');
            header.classList.toggle('hide');
            UPDATE_BUTTONS.forEach((button) => button.classList.add('hide'));
            DELETE_BUTTONS.forEach((button) => button.classList.add('hide'));
            MAIN_UPDATE_BUTTON.classList.remove('active');
        });
    }
    if (requirementsMet) clickToStart();
}

function closeAddModal() {
    const requiredElements = [
        cancelButtons,
        modal,
        addForms,
    ];
    const requirementsMet = requiredElements.every((element) => element);

    function closeAllModals() {
        cancelButtons.forEach((button) => {
            on_click(button, () => {
                close(modal);
                close(addForms.add_procedure);
                close(addForms.add_section);
                close(addForms.add_subsection);
                close(addForms.add_solution);
                close(addForms.add_obs);
                close(addForms.add_issue);
            });
        });
    }
    if (requirementsMet) closeAllModals();
}

export default function startEdition() {
    if (IS_USER_EDITOR) {
        initEditionMode();
        closeAddModal();
        openRespectiveModal();
    } else {
        startEditionButton.remove();
    }
}
