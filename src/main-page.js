import { buildElement } from './build-element';
import glassImage from './images/water.jpg';

//put button logic on main page
//module for every button

function loadMain() {
    
    const mainDiv = document.querySelector('.main');
    //prevent endless append
    mainDiv.innerHTML = '';

    const mainDescription = buildElement(
        'p',
        'main-description', 
        'Grace your tastebuds with our carefully curated selections of the finest water drops in the Atlantic.'
    );

    const image = document.createElement('img');
    image.classList = 'main-img';
    image.src = glassImage;
    image.alt = 'Glass of water'

    mainDiv.appendChild(image);
    mainDiv.appendChild(mainDescription);

}
 
export { loadMain };