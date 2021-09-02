import $ from './elements.js';
import { dispatch } from '../services.js';

const handleRemoveTodo = (id) => {
    dispatch({ 
        type: 'removeTodo',
        payload:{ id },
    });
};

const handleDoneTodo = (id) => {
    dispatch({ 
        type: 'checkDoneTodo',
        payload:{ id },
    });
};

export default function List({ todos }) {
    const list = todos
        .map(({ id, title, completed }) => $.li({}, 
            [
                $.input({ 
                    type: 'checkbox', 
                    checked: completed, 
                    onchange: () => handleDoneTodo(id) 
                }),
                $.span({style: completed ? "color:red" : null}, [title]),
                $.button({ onclick: () => handleRemoveTodo(id)},['삭제']),
            ]));

    return $.ul({}, list);
}
