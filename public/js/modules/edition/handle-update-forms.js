import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js';
import UpdateForms from './update-form.js';

const IS_USER_ADM = BOOLEAN_PERMISSION('adm');

function executeUpdates() {
    const updatableTargets = [
        'section',
        'subsection',
        'procedure',
        'solution',
        'obs',
        'issue',
    ];

    updatableTargets.forEach((content) => {
        const updateTitleForm = new UpdateForms(
            `.update_${content}_title`,
            `.update_${content}_title_form`,
            `.${content}_title_text`,
            `.close_update_${content}_form`,
        );
        updateTitleForm.init();

        const updateDescriptionForm = new UpdateForms(
            `.update_${content}_description`,
            `.update_${content}_description_form`,
            `.${content}_description_text`,
            `.close_update_description_${content}_form`,
        );
        updateDescriptionForm.init();
    });

    const updateUserForm = new UpdateForms(
        '.update_user_button',
        '.update_user_form',
        '.user_info_subcontainer',
        '.close_update_user_form',
    );
    updateUserForm.init();
}

export default function initUpdates() {
    if (IS_USER_ADM) executeUpdates();
}
