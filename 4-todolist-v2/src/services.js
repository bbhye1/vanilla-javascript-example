import store from './store.js';

import getTasks from './apis/tasks.js';

export function initializeStore({ update, state }) {
    store.state = state;
    store.updateView = update;
}

export function getState() {
    return store.getState();
}

export function dispatch({ type, payload = {} }) {
   return reducer[type](payload);
}

const reducer = {
    addTodo: ({ title }) => {
        const { todos, counter } = getState();
    
        const newTodos = [...todos, { id: counter, title, completed: false }];
    
        store.setState('todos', newTodos);
        store.setState('counter', counter + 1);
    },
    removeTodo: ({ id }) => {
        const { todos } = getState();

        const newTodos = [...todos].filter((todo) => todo.id !== id);
    
        store.setState('todos', newTodos);
    },
    checkDoneTodo: ({ id }) => {
        const { todos } = getState();
    
        const newTodos = [...todos].map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
    
            return todo;
        });
    
        store.setState('todos', newTodos);
    },
    fetchTodos: async() => {
        const todos = await getTasks();

        const lastCounter = todos[todos.length -1].id;
    
        store.setState('todos', todos);
        store.setState('counter', lastCounter + 1);
    }
};
