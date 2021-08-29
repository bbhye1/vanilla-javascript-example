const store =  {
    state: {},
    update: null,

    getState() {
        return this.state;
    },

    setState(key, value) {
        this.state[key] = value;

        this.update();
    },
};

export function getState() {
    return store.getState();
}

export function initializeStore({ state, update }) {
    store.state = state;
    store.update = update;
}

export function addTodo(todo) {
    const { todos, counter } = getState();
    
    const newTodos = [...todos, { id: counter, title: todo }];

    store.setState('todos', newTodos);
    store.setState('counter', counter + 1);
}
