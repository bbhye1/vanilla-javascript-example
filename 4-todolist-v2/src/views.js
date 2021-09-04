export const Title = (title) => `<h1>${title}</h1>`;
    
export const Form = () => `
    <form id="todo-form">
        <input id="todo-input" type="text">
        <button type="submit">완료</button>
    </form>
`;

export const List = (todos) => `
    <ul>
        ${todos.map(({ title, id, completed }) => `
            <li>
                <input
                    id="check-done-${id}"
                    type="checkbox" 
                    ${completed ? 'checked' : ''}
                >
                <label for="check-done-${id}">
                ${title}
                </label>
                <button
                    id="delete-button-${id}" 
                    type="button"
                >
                    삭제
                </button>
            </li>
        `).join('')}
    </ul>
`;
