import '@testing-library/jest-dom';

import render from './render.js';
import Form from './Form.js';

describe('render', () => {
    beforeEach(() => {
        document.body.innerHTML = '';

        const app = document.createElement('div');
        
        app.setAttribute('id', 'app');
        
        document.body.appendChild(app);
    });

    it('show contents', () => {
        const app = document.getElementById('app');
        const state = {};
        const structure = {
            container: app,
            children: [
                { view: Form },
            ],
            event: [{
                id: 'todo-form',
                type: 'submit',
                listener: 'onAddTodo',
            }],
        };

        render(state, structure);
        
        expect(app).toHaveTextContent('등록');
        
    });
});
