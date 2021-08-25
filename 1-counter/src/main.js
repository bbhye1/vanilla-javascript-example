const app = document.querySelector('#app');

function render() {
    const counter =  `
        <div id="counter">
            <p>Counter</p>
            <p>result: 0</p>
            <p>
                <button type="button" onClick={handleClick}>
                +1
                </button>
            </p>
        </div>
    `;

    app.innerHTML = counter;
}

render();