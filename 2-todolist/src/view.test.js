import { render } from './view.js';

test('render', () => {
    const state = {
        todos: [
            { 
                id: 1,
                title: '할일 1',
                completed: false,
            },
            { 
                id: 2,
                title: '할일 1',
                completed: false,
            },
        ],
    };

    const html = render(state);

    expect(html).toMatch('<h1>');
    expect(html).toMatch('<form');
    expect(html).toMatch('<input');
    expect(html).toMatch('<button');
    expect(html).toMatch('<ul');
    expect(html).toMatch('<li');
});
