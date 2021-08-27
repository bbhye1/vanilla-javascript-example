import { render } from './view';

test('renders view', () => {
    const state = {
        inputValue: '할일 1',
        todos: ['할일 2'],
    };

    const html = render(state);

    expect(html).toMatch('<ul>');
    expect(html).toMatch('<li>');
    expect(html).toMatch('<form');
    expect(html).toMatch('<input');
    expect(html).toMatch('할일 1');
    expect(html).toMatch('할일 2');
});
