import { getTasks } from './apis/tasks.js';

const state = {
    counter: 1,
    todos: [],
};

export function getTodos() {
    return state.todos;
}

export function addTodo(title) {
   const newTodo = {
        id : state.counter,
        title,
        completed: false,
   }

   state.todos = [...state.todos, newTodo];
   state.counter += 1;
}

export function deleteTodo(id) {
    state.todos = state.todos
    .filter((todo) => todo.id !== id);
}
 
export function checkTodo(id) {
    state.todos = state.todos
    .map((todo) => {
        if(todo.id === id) {
            todo.completed = !todo.completed;
            return todo;
        }

        return todo;
    });
}

export async function fetchTodos() {
    const todos = await getTasks();

    state.todos = todos;

    const maxId = Math.max(...todos.map(({id}) => id));
    state.counter = maxId + 1;
}
