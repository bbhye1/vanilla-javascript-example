import { addTodo, getState, initializeStore } from './services.js';

describe('serveices', () =>{
    const update = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('getState', () => {
        expect(getState()).toEqual({});
    });
    
    it('initialize', () => {
        const state = {
            counter: 1,
            todos: [],
        };
    
        
        initializeStore({ state, update });
    
        expect(getState()).toEqual(state);
    });
    
    it('addTodo', () => {
        addTodo('할일 1');
        const { todos, counter } = getState();
        
        expect(todos[todos.length - 1]).toEqual({
            id: 1,
            title: '할일 1'
        });
    
        expect(counter).toBe(2);
        expect(update).toBeCalledTimes(2);
    });

    it('addTodo', () => {
        addTodo('할일 1');
        
        expect(update).toBeCalledTimes(2);
    });
});
