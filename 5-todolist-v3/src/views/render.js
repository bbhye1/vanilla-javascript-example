import listeners from '../listeners.js';

function bind(id, eventType, eventListener) {
    const app = document.getElementById('app');

    function aux(node, event) {
        if (!node) {
            return;
        }

        if (node.id !== id) {
            aux(node.parentNode, event);
            return;
        }

        if (node.id === id) {
            eventListener(event);
        }  
    }

    app.addEventListener(eventType, (event) => {
        event.preventDefault();

        aux(event.target, event);
    });
}

function createElement(state, parent, children = []) {
    children.forEach((child)=> { 
        const element = child.view(state);
        parent.appendChild(element);

        if(child.children) {
            createElement(element, child.children);
        }
    });
}


export default function render(state, structure) {
    const { container, children, events } = structure;

    createElement(state, container, children);  

    if(!events) return; 


    events.forEach(({ id, type, listener }) => {
        bind(id, type, listeners[listener]);
    });
}
