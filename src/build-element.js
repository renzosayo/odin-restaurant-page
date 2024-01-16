function buildElement(type, classToAdd = "", textContent = ""){
    const element = document.createElement(type);
    element.classList = classToAdd;
    element.textContent = textContent;

    return element;
}

export { buildElement };