function component() {
    const element = document.createElement('div');

    element.innerHTML = 'JavaScript study';

    return element;
}

document.body.appendChild(component());
