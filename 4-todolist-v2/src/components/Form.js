import $ from './elements.js';
import { dispatch } from '../services.js';

const handleSubmit = (e) => {
    e.preventDefault();

    const input = document.getElementById('todo-input');
    
    dispatch({ 
        type: 'addTodo',
        payload:{ title: input.value },
    });
};

export default function Form() {
    return $.form({ onSubmit: handleSubmit }, [
            $.input({ id: 'todo-input', type: 'text'}),
            $.button({ type: 'submit' }, ['등록']),
        ]);
}   
