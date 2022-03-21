// dynamic burger for dynamic content
function burger(buttonComponent, contentComponent, showClass, subcontentComponent, hiddenClass) {
    const BUTTONS = document.querySelectorAll(buttonComponent);
    const CONTENTS = document.querySelectorAll(contentComponent);

    function hideSubcontents(content) {
        const SUBCONTENTS = content.querySelectorAll(subcontentComponent);

        SUBCONTENTS.forEach((subcontent) => {
            subcontent.classList.remove(showClass);
            subcontent.classList.add(hiddenClass);
        });
    }

    function showContent() {
        CONTENTS.forEach((item) => {
            item.classList.toggle(showClass);
            hideSubcontents(item);
        });
    }

    BUTTONS.forEach((button) => {
        button.addEventListener('click', showContent);
    });
}

export default function burgers() {
    // main nav burger
    burger('#nav_burger', '.nav_links', 'show', '.subsection_links', 'while_hidden');
}
