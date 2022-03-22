import showContent from './modules/procedure/content_container.js';
import Burgers from './modules/main/burgers.js';
import HomeButton from './modules/main/home-button.js';

showContent();
const sectionBurgers = new Burgers('.page_content_burger', '.item_content_text', 'active');
sectionBurgers.init();

const homeButton = new HomeButton(
    ['.item_content_text', '.inner_div', '.item_content_container'],
    'active',
);
homeButton.init();
