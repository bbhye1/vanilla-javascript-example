import { initializeStore, getState, dispatch } from "./services.js";

import render from './components/App.js';

const app = document.getElementById('app');

function update() {
    const state = getState();

    app.innerHTML = '';

    const App = render(state);
    app.appendChild(App);
}

initializeStore({update, state: {
    counter: 1,
    todos: [],
}});

(() => {
    dispatch({ type: 'fetchTodos'});
})();
