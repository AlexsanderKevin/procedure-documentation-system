export default class Modal {
    constructor(containers, frames, openButtons, closeButtons) {
        this.containers = document.querySelectorAll(containers);
        this.frames = document.querySelectorAll(frames);
        this.openButtons = document.querySelectorAll(openButtons);
        this.closeButtons = document.querySelectorAll(closeButtons);
        this.activeClass = 'show';
    }

    show(index) {
        this.containers[index].classList.add(this.activeClass);
        this.frames[index].classList.add(this.activeClass);
    }

    close() {
        this.containers.forEach((modal) => modal.classList.remove(this.activeClass));
        this.frames.forEach((modal) => modal.classList.remove(this.activeClass));
    }

    addEvents() {
        this.openButtons.forEach((button, index) => {
            button.addEventListener('click', () => this.show(index));
        });

        this.closeButtons.forEach((button) => {
            button.addEventListener('click', () => this.close());
        });
    }

    init() {
        this.addEvents();
    }
}
