import user_filters from './modules/profile/user_filter.js'
import add_department from './modules/profile/add_department.js'
import add_user from './modules/profile/user_list.js'
import main_menu from './modules/profile/main_menu.js'
import requisition_menu from './modules/profile/req_menu.js'
import this_user from './modules/profile/this_user_info.js'
import show_gradually from './modules/main/show_gradually.js'

user_filters()
add_department()
add_user()
main_menu()
requisition_menu()
this_user()
show_gradually('[data-card="user"]')

import delete_user from './modules/edition/delete_user.js'
import delete_department from './modules/edition/delete_department.js'
import update_mode from './modules/edition/update_mode.js'
import update_forms from './modules/edition/update_forms.js'

delete_user()
delete_department()
update_mode()
update_forms()