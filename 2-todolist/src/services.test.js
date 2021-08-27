import { 
    getTodos, addTodo, deleteTodo,
    checkTodo, fetchTodos 
} from './services.js';

import { getTasks } from './apis/tasks.js';

jest.mock('./apis/tasks.js');

test('addTodos', () => {
    addTodo('새로운 할 일');

    const todos = getTodos();

    expect(todos[todos.length - 1].title).toBe('새로운 할 일');
});

test('deleteTodo', () => {
    const id = 1;

    deleteTodo(id);

    const todos = getTodos();

    expect(todos.length).toBe(0);
});

test('checkTodo', () => {
    addTodo('새로운 할 일');
    
    const id = 2;

    checkTodo(id);

    const todos = getTodos();

    expect(todos[0].completed).toBeTruthy();

    checkTodo(id);

    expect(todos[0].completed).toBeFalsy();
});

test('fetchTodos', async() => {

    getTasks.mockImplementation(async() => [
        { id: 1, title: '할일 1', completed: false }
    ]);

    await fetchTodos();

    expect(getTodos()).toEqual([
        { id: 1, title: '할일 1', completed: false }
    ]);
});
