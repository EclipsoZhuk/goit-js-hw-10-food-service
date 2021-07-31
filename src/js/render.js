import items from '../menu.json';
import menuItemTpl from '../templates/menu-item.hbs';

const menuGallery = document.querySelector('.js-menu');

function createMenuGallery(items) {
    return items.map(menuItemTpl).join('');
}
menuGallery.insertAdjacentHTML('beforeend', createMenuGallery(items));
