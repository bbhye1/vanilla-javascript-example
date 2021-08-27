export function render({ todos }) {
    return `
    <h1>Todo list</h1>
    <form id="todo-form">
        <input id="todo-input" type="text">
        <button type="submit">등록</button>
    </form>
    <ul>
        ${todos.map(({id, title, completed}) => `
            <li style=${completed ? " color:red ": null}>
                <input id="checkbox-${id}" type="checkbox" ${completed? 'checked' : null} >
                ${title} 
                <button id="delete-button-${id}" type="button">삭제</button>
            </li>
        `).join('')}
    </ul>
    `;
}
