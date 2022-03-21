export default class Burger {
    constructor(burgers, contents, activeClass) {
        this.burgers = document.querySelectorAll(burgers);
        this.contents = document.querySelectorAll(contents);
        this.activeClass = activeClass;
    }

    toggle(index) {
        this.contents[index].classList.toggle(this.activeClass);
    }

    addBurgerEvent() {
        this.burgers.forEach((burger, index) => {
            if (this.contents[index].children.length) {
                burger.addEventListener('click', () => this.toggle(index));
            }
        });
    }

    init() {
        this.addBurgerEvent();
    }
}
