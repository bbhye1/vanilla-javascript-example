export default async function getTasks() {
    const tasks = await fetch('https://jsonplaceholder.typicode.com/todos');

    return tasks.json();
}