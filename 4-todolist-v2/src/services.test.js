import { initializeStore, getState } from './services.js';

test('store', () => {
    const update = jest.fn();
    const state = {
        todos: [],
    }
    initializeStore({ update, state });

    expect(getState()).toEqual(state);
});
