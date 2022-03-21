import user_filters from './modules/profile/user_filter.js';
import add_department from './modules/profile/add_department.js';
import add_user from './modules/profile/user_list.js';
import main_menu from './modules/profile/main_menu.js';
import requisition_menu from './modules/profile/req_menu.js';
import this_user from './modules/profile/this_user_info.js';
import show_gradually from './modules/main/show_gradually.js';

import EditionOperation from './modules/edition/edition-operation.js';
import handleUpdateForms from './modules/edition/handle-update-forms.js';

user_filters();
add_department();
add_user();
main_menu();
requisition_menu();
this_user();
show_gradually('[data-card="user"]');

const deleteDepartment = new EditionOperation('#main_delete_button.department', '.department_trash');
deleteDepartment.init();

const deleteUser = new EditionOperation('#main_delete_button.user', '.user_trash');
deleteUser.init();

const updateMode = new EditionOperation('#main_edit_button', '.edit_section');
updateMode.init();

handleUpdateForms();
