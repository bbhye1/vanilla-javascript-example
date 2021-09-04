import { addTodo } from './services.js';

const eventListeners = {
    onAddTodo: (e) => {
        const input = document.getElementById('todo-input');
        addTodo(input.value);
    },
};

export default eventListeners;
