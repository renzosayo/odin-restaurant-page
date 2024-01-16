import { buildElement } from "./build-element";

function loadContact() {
    const mainDiv = document.querySelector('.main');
    mainDiv.innerHTML = '';

    const contactDiv = buildElement('div', 'contact-div');
    
    contactDiv.appendChild(buildElement('h3', '', 'Contact Numbers:'));
    contactDiv.appendChild(buildElement('p', '', '📞 1234-567-8910'));
    contactDiv.appendChild(buildElement('p', '', '📞 1098-765-4321'));

    mainDiv.appendChild(contactDiv);
}

export { loadContact };