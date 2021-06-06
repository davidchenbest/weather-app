const get = async (url) => {
    console.log('fetch');
    const res = await fetch(url)
    if ((res.status + '').startsWith(4)) {
        throw new Error('Bad Request');

    }
    return await res.json();
}

export { get }