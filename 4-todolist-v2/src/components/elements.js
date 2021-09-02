function createElement(tag, props = {}, children = []) {
    const element = document.createElement(tag);

    Object.entries(props).forEach(([key, value]) => {
        if(typeof value === 'string') {
            element.setAttribute(key, value);
        }

        element[key.toLowerCase()] = value;
    });

    children.forEach((child) => {
        if(child instanceof Node) {
            element.appendChild(child);
            return;
        }

        element.appendChild(
            document.createTextNode(child),
        );
    });

    return element;
}

const factory = (tagName) => (...args) => createElement(tagName, ...args);

const elements = {
    h1: factory('h1'),
    p: factory('p'),
    span: factory('span'),
    div: factory('div'),
    form: factory('form'),
    input: factory('input'),
    button: factory('button'),
    ul: factory('ul'),
    li: factory('li'),
};


export default elements;