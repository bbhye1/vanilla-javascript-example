import { render } from './view';

test('render', () => {
    const state = {
        result : 2,
    };

    const html = render(state);

    expect(html).toMatch('<p>');
    expect(html).toMatch('*2');
    expect(html).toMatch('2');
});
