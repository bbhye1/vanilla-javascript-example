import { bindEvents } from './listener.js';

import { getState } from './services.js';

import { Title, Form, List } from './views.js'

function bind(id, eventType, eventListener ) {
    const el = document.getElementById(id);

    el.addEventListener(eventType, eventListener);
}

const app = document.getElementById('app');

function update() {
    const state =  {
        todos: getState('todos'),
    }

    app.innerHTML = `
        ${Title('Todo List')}
        ${Form()}
        ${List(state.todos)}
    `;

    bindEvents(state, { bind, update });
}

update();
