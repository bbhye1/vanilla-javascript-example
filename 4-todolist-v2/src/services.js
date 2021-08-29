const state = {
    counter: 1,
    todos: [{
        id: 0,
        title: '할일 1',
        completed: false,
    }],
};

export function getState(key) {
    return state[key];
}

export function dispatch(type, payload) {
    reducer[type](payload);
}

const reducer = {
    addTodo: ({ todo }) => {
        state.todos.push({
            id: state.counter,
            title: todo,
            completed: false,
        });

        state.counter += 1;
    },
    deleteTodo: ({ id }) => {
        state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    checkTodo: ({ id }) => {
        state.todos = state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });
    },
};
