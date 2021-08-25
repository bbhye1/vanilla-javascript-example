import { render } from './view.js';

import { getResult, plus } from './services.js';

const app = document.getElementById('app');

const bind = (id, eventType, eventCallback) => {
    const element = document.getElementById(id);

    element.addEventListener(eventType, eventCallback);
};

function update() {  
    const state = {
        result: getResult(),
    };

    app.innerHTML = render(state);

    [1,2,3,4,5,6,7,8,9].forEach((number) => {
        bind(number, 'click', (_) => {
            plus(number);
    
            update();
        });
    });

    bind('*2', 'click', (_) => {
        plus(state.result);

        update();
    });

}

update();
