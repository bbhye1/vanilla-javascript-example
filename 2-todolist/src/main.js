import { render } from './view.js';

import { getState } from './services.js';

import { bindEvents } from './listener.js';

const app = document.getElementById('app');

function bind(id, eventType, eventListener) {
    const element = document.getElementById(id);

    element.addEventListener(eventType, eventListener);
}

export function update() {
    const store = {
        inputValue: getState('inputValue'),
        inputFocus: getState('inputFocus'),
        todos: getState('todos'),
    };

    app.innerHTML = render(store);
    
    const input = document.getElementById('todo-input');

    if(store.inputFocus) {
        input.focus();
        input.value = null;
        input.value = store.inputValue;
    }

    bindEvents(store, { bind, update });
}

update();
