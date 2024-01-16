import { createHeader } from './header';
import { loadMain } from './main-page';
import { buildElement } from './build-element';

function initializePage() {

    const divContent = document.querySelector('#content');

    //create header
    const header = createHeader();

    //create main
    
    const mainDiv = buildElement('div', 'main');
    //create footer

    //append to div#content
    divContent.appendChild(header);
    divContent.appendChild(mainDiv);

    loadMain();
}

export { initializePage };