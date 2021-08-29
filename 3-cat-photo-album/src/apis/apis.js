export async function getRoot() {
    const data = await fetch('https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev');

    return data.json();
}

export async function getDirectory(id) {
    const data = await fetch(`https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/${id}`);

    return data.json();
}
