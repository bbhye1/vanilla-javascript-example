import { render } from './view.js';

import { fetchTodos, getTodos } from './services.js';

import { bindEvents } from './listener.js';

function bind(id, eventType, eventHandler) {
    const el = document.getElementById(id);

    el.addEventListener(eventType, eventHandler);
}

const app = document.getElementById('app');

function update() {
    const state = {
        todos: getTodos(),
    };

    app.innerHTML = render(state);

    bindEvents(state, { bind, update })
}


(async () => {
    await fetchTodos();
    update();
})();
