import { bindEvents } from './listener.js';

const events = {};

const bind = (id, eventType) => {
    events[`${id}.${eventType}`] = true;
}

const update = () => {};

test('bind', () => {
    const state = {
        todos: [{
            id: 1,
            title: '할일 1',
            completed: false,
        },
        {
            id: 2,
            title: '할일 2',
            completed: false,
        },
    ],
    };

    bindEvents(state, { bind, update });

    expect(events['todo-form.submit']).toBeTruthy();
    expect(events['delete-button-1.click']).toBeTruthy();
    expect(events['delete-button-2.click']).toBeTruthy();
    expect(events['checkbox-1.click']).toBeTruthy();
    expect(events['checkbox-2.click']).toBeTruthy();
});
