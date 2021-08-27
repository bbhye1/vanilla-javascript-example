import { setState } from './services.js';

export const bindEvents = (state, methods) => {
    bindChangeInput(state, methods);
    bindAddTodo(state, methods);
    bindDeleteTodo(state, methods);
}

const bindChangeInput = (_, { bind, update }) => {
    bind('todo-input', 'input', (e) => {
        setState('changeInput', e.target.value);
        setState('focusIn');
        update();
    });
};

const bindAddTodo = (state, {bind, update}) => {
    bind('todo-form', 'submit', (e) => {
        e.preventDefault();

        setState('changeInput', '');
        setState('addTodo', state.inputValue);
        update();
    });
};

const bindDeleteTodo = (state, {bind, update}) => {
    [...new Array(state.todos.length)].forEach((_, i) => {
        bind(`todo-delete-${i}`, 'click', (e) => {
            setState('deleteTodo', i);
            update();
        });
    });
};
