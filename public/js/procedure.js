import show_content from './modules/procedure/content_container.js';
import Burgers from './modules/main/burgers.js';

show_content();
const sectionBurgers = new Burgers('.page_content_burger', '.item_content_text', 'active');
sectionBurgers.init();
