function createElement(tag, args = {}, children = []) {
  const element = document.createElement(tag);

  Object.entries(args).forEach(([key, value]) => {
    if (typeof value === 'string') {
      element.setAttribute(key, value);
      return;
    }

    element[key.toLowerCase()] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }

    element.appendChild(document.createTextNode(child));
  });

  return element;
}

const factory = (tagName) => (...args) => createElement(tagName, ...args);

const elements = {
  h1: factory('h1'),
  div: factory('div'),
  nav: factory('nav'),
  img: factory('img'),
  p: factory('p'),
  span: factory('span'),
};

export default elements;
