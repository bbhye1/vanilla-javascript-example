import { getState, initializeStore } from "./services.js";

import  Form  from './views/Form.js';
import  List  from './views/List.js';
import  render from './views/render.js';


function update() {
    document.body.innerHTML = '<div id="app"></div>';
    
    const app = document.getElementById('app');

    const state =  getState();

    render(state, {
        container: app,
        children: [
            { view: Form },
            { view: List },
        ],
        events: [
            { id: 'todo-form', type: 'submit', listener: 'onAddTodo'},
            { id: 'delete-button-1', type: 'submit', listener: 'onAddTodo'},
        ],
    });
}

initializeStore({ update, state: {
    counter: 1,
    todos: [],
}});

update();
