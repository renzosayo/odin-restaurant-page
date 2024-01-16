import { buildElement } from "./build-element";
import { loadContact } from "./contact-page";
import { loadMain } from "./main-page";
import { loadMenu } from "./menu-page";

function createHeader() {
    //create header

    const headerDiv = buildElement('div', 'header');

    const restaurantName = buildElement('h1', 'restaurantName', 'Le Fantastique Wateur Steur');

    const tabBar = buildElement('div', 'tabBar');

    //create buttons
    const homeButton = buildElement('button', 'tabButton', 'Home');
    homeButton.addEventListener('click', loadMain);

    const menuButton = buildElement('button', 'tabButton', 'Menu');
    menuButton.addEventListener('click', loadMenu);

    const contactButton = buildElement('button', 'tabButton', 'Contact Us');
    contactButton.addEventListener('click', loadContact);

    tabBar.appendChild(homeButton);
    tabBar.appendChild(menuButton);
    tabBar.appendChild(contactButton);

    headerDiv.appendChild(restaurantName);
    headerDiv.appendChild(tabBar);

    return headerDiv;
}

export { createHeader };