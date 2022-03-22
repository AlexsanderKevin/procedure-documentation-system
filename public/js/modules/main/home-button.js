export default class HomeButton {
    constructor(contentsArray, activeClass) {
        this.button = document.querySelector('#home_button');
        this.activeClass = activeClass;
        this.contents = contentsArray.map((content) => document.querySelectorAll(content));
    }

    closeContent() {
        this.contents.forEach((content) => {
            content.forEach((item) => {
                item.classList.remove(this.activeClass);
            });
        });
    }

    addButtonEvent() {
        this.button.addEventListener('click', () => this.closeContent());
    }

    init() {
        this.addButtonEvent();
    }
}
