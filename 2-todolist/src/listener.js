import { addTodo, deleteTodo, checkTodo } from './services.js';

function getValue(id) {
    const el = document.getElementById(id);

    return el.value;
}


export function bindEvents(state,  methods ) {
    bindAddTodo(methods);
    bindDeleteTodo(state, methods);
    bindCheckTodo(state, methods);
}

function bindAddTodo({ bind, update }) {
    bind('todo-form', 'submit', (e) => {
        e.preventDefault();

        addTodo(getValue('todo-input'));
        update();
    });
}

function bindDeleteTodo(state, { bind, update }) {
    state.todos.forEach(({ id }) => {
        bind(`delete-button-${id}`, 'click', (e) => {
            deleteTodo(id);
            update();
        });
    });
}

function bindCheckTodo(state, { bind, update }) {
    state.todos.forEach(({ id }) => {
        bind(`checkbox-${id}`, 'click', (e) => {
            checkTodo(id);
            update();
        });
    });
}
