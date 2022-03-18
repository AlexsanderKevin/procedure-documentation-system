import user_filters from './modules/profile/user_filter.js';
import add_department from './modules/profile/add_department.js';
import add_user from './modules/profile/user_list.js';
import main_menu from './modules/profile/main_menu.js';
import requisition_menu from './modules/profile/req_menu.js';
import this_user from './modules/profile/this_user_info.js';
import show_gradually from './modules/main/show_gradually.js';

import DeleteMode from './modules/edition/delete-mode.js';
import update_mode from './modules/edition/update_mode.js';
import update_forms from './modules/edition/update_forms.js';

user_filters();
add_department();
add_user();
main_menu();
requisition_menu();
this_user();
show_gradually('[data-card="user"]');

const deleteDepartment = new DeleteMode('#main_delete_button.department', '.department_trash');
deleteDepartment.init();

const deleteUser = new DeleteMode('#main_delete_button.user', '.user_trash');
deleteUser.init();

update_mode();
update_forms();
