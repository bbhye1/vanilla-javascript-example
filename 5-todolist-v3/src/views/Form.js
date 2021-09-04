const Form = () => {
    const form = document.createElement('form');
    const html = `
        <input id="todo-input" type="text">
        <button type="submit">등록</button>
    `;
    form.innerHTML = html;
    form.id = 'todo-form';

    return form;
};

export default Form;
