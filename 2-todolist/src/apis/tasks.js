export const getTasks = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    return data.json();
};
