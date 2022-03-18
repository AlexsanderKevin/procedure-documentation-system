import { get } from '../../../lib/main.js';
import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js';

const IS_USER_ADM = BOOLEAN_PERMISSION('adm');

const updateFormInteraction = (updateButtons, forms, contents, deleteButtons) => {
    const BUTTONS = get(updateButtons);
    const FORMS = get(forms);
    const CONTENTS = get(contents);
    const DELETE_BUTTONS = get(deleteButtons);

    function showForms(index) {
        FORMS[index].classList.remove('hide');
        CONTENTS[index].classList.add('hide');
        BUTTONS[index].classList.add('hide');
    }
    function hideForms(index) {
        FORMS[index].classList.add('hide');
        BUTTONS[index].classList.remove('hide');
        CONTENTS[index].classList.remove('hide');
    }

    BUTTONS.forEach((BUTTON, index) => {
        BUTTON.addEventListener('click', () => {
            showForms(index);

            DELETE_BUTTONS[index].addEventListener('click', () => {
                hideForms(index);
            });
        });
    });
};

function executeUpdates() {
    const updatableTargets = [
        'section',
        'subsection',
        'procedure',
        'solution',
        'obs',
        'issue',
    ];
    updatableTargets.forEach((target) => {
        // titles / names
        updateFormInteraction(
            `.update_${target}_title`,
            `.update_${target}_title_form`,
            `.${target}_title_text`,
            `.close_update_${target}_form`,
        );
        // content / description
        updateFormInteraction(
            `.update_${target}_description`,
            `.update_${target}_description_form`,
            `.${target}_description_text`,
            `.close_update_description_${target}_form`,
        );
    });
    updateFormInteraction(
        '.update_user_button',
        '.update_user_form',
        '.user_info_subcontainer',
        '.close_update_user_form',
    );
}

export default function initUpdates() {
    if (IS_USER_ADM) executeUpdates();
}
