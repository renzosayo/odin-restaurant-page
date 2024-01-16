import { buildElement } from "./build-element";
import frenchWater from './images/french-water.jpg';
import germanWater from './images/german-water.jpg';
import italianWater from './images/italian-water.jpeg';

function loadMenu() {
    const mainDiv = document.querySelector('.main');
    mainDiv.innerHTML = '';

    const menuDiv = buildElement('div', 'menu-div');

    const frenchDiv = buildElement('div', 'menu-selection');
    const frenchImg = document.createElement('img');
    frenchImg.src = frenchWater;
    const frenchH2 = buildElement('h2', '', 'Le Wateur Francais');
    const frenchPara = buildElement('p', '', 'Finest spring water from the French Alps');

    frenchDiv.appendChild(frenchImg);
    frenchDiv.appendChild(frenchH2);
    frenchDiv.appendChild(frenchPara);

    const germanDiv = buildElement('div', 'menu-selection');
    const germanImg = document.createElement('img');
    germanImg.src = germanWater;
    const germanH2 = buildElement('h2', '', 'Deutsches Wasser');
    const germanPara = buildElement('p', '', 'More excellent than Bavarian Bier');

    germanDiv.appendChild(germanImg);
    germanDiv.appendChild(germanH2);
    germanDiv.appendChild(germanPara);

    const italianDiv = buildElement('div', 'menu-selection');
    const italianImg = document.createElement('img');
    italianImg.src = italianWater;
    const italianH2 = buildElement('h2', '', 'Acqua Italiana');
    const italianPara = buildElement('p', '', 'Clear and crisp tones of rural Italy');

    italianDiv.appendChild(italianImg);
    italianDiv.appendChild(italianH2);
    italianDiv.appendChild(italianPara);

    menuDiv.appendChild(frenchDiv);
    menuDiv.appendChild(germanDiv);
    menuDiv.appendChild(italianDiv);

    mainDiv.appendChild(menuDiv);
    
}

export { loadMenu };