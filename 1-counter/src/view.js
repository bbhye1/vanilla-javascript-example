export const render = ({ result }) => {
    return `
        <div id="counter">
            <p>Counter</p>
            <p>${result}</p>
            <p>
                ${
                    [1,2,3,4,5,6,7,8,9].map((number) => `
                        <button id="${number}" type="button">
                            ${number}
                        </button>
                        `).join('')
                }
            </p>
            <p>
                <button id="*2" type="button">
                    *2
                </button>
            </p>
        </div>
    `;
};
