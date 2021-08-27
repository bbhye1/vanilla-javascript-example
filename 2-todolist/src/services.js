const state = {
    inputValue: '',
    inputFocus: false,
    todos: [],
};

export function setState(type, value) {
    reducer[type](value);
};

export function getState(key) {
    return state[key];
};

const reducer = {
    changeInput: ( value ) => {
        state.inputValue = value;
    },
    focusIn: () => {
        state.inputFocus = true;
    },
    addTodo: (todo) => {
        state.todos = [...state.todos, todo];
    },
    deleteTodo: (index) => {
        state.todos = [
            ...state.todos.slice(0, index),
            ...state.todos.slice(index + 1),
        ];
    },
};
