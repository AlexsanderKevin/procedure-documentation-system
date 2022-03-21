export default function deactivateEmptySubsection() {
    const CONTAINERS = document.querySelectorAll('.item_subsection');

    CONTAINERS.forEach((container) => {
        const BURGER = container.querySelector('.subsection_burger');
        const ITEM_CONTAINER = container.querySelector('.item_subsection_content');
        const ITEMS = ITEM_CONTAINER.querySelectorAll('.single_item_container');

        if (!ITEMS.length) {
            BURGER.style.opacity = '0.2';
        }
    });
}
