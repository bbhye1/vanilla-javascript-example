const List = ({todos}) => {
    const list = document.createElement('ul');
    const html = `
        ${todos.map((todo) => `
            <li>
                ${todo.title}
                <button id="remove-button-${todo.id}" type=""button"">
                    삭제
                </button>
            </li>
        `).join('')}
    `;

    list.innerHTML = html;
    return list;
};

export default List;
