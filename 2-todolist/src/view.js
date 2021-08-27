export const render = ({ inputValue, todos }) => {
    return `
        <h1>todo-list</h1>
        <form id="todo-form">
            <input id="todo-input" type="text" value="${inputValue}" 
            ></input>
            <button type="submit">등록</button>
        </form>
        <ul>
            ${todos.map((todo, i) => `
            <li>
                ${todo}
                <button id="todo-delete-${i}" type="button">삭제</button>
            </li>
            `).join('')}
        </ul>
`;
}
