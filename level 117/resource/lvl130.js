async function fetch_people() {
    try {
        let resp = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!resp.ok) {
            throw new Error("this is an error")
        }
        let data = await resp.json()
        render(data)
    } catch (err) {
        console.error(err)
    }
}