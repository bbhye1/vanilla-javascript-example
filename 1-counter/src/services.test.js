import { getResult, plus } from './services';

test('getResult', () => {
    expect(getResult()).toBe(0);
});

test('plus', () => {
    expect(getResult()).toBe(0);

    plus(2);
    expect(getResult()).toBe(2);

    plus(4);
    expect(getResult()).toBe(6);
});
