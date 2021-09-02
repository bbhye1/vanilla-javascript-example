import $ from './elements.js';

import Form from './Form.js';
import List from './List.js';

export default function app({ todos }) {
    return $.div({ id: 'app'}, [
        $.h1({}, ['Todo List']),
        Form(),
        List({ todos }),
    ]);
}   
