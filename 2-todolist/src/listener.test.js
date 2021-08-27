import { bindEvents } from './listener';

test('bind', () => {
    const events = {};

    const bind = (id, eventType, callback) => {
      events[`${id}.${eventType}`] = callback;
    };
  
    const update = () => {};
  
    const state = {
        inputValue: '',
        inputFocus: false,
        todos: ['할일 1', '할일 2'],
    };
  
    bindEvents(state, { bind, update });
    
    expect(events['todo-input.input']).toBeTruthy();
  
    expect(events['todo-form.submit']).toBeTruthy();

    expect(events['todo-delete-0.click']).toBeTruthy();
    expect(events['todo-delete-1.click']).toBeTruthy();
  });
