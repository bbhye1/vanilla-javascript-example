import { dispatch } from './services.js'

export function bindEvents(state, methods) {
    bindAddTodo(state, methods);
    bindDeleteTodo(state, methods);
    bindCheckDone(state, methods);

}

function bindAddTodo(state, { bind, update }) {
    bind('todo-form', 'submit', (e) => {
        e.preventDefault();

        const input = document.getElementById('todo-input');

        dispatch('addTodo', { todo: input.value });
        update();
    });
}

function bindDeleteTodo(state, { bind, update }) {
    state.todos.forEach(({id}) => {
        bind(`delete-button-${id}`, 'click', (e) => {
            dispatch('deleteTodo', { id });
            update();
        });
    });
}

function bindCheckDone(state, { bind, update }) {
    state.todos.forEach(({id}) => {
        bind(`check-done-${id}`, 'click', (e) => {
            dispatch('checkTodo', { id });
            update();
        });
    });
}
