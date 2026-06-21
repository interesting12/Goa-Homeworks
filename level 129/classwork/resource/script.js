async function getJoke() {
    try {
        let fetchedData = await fetch('https://official-joke-api.appspot.com/random_joke')
        if (!fetchedData.ok) {
            throw new Error("Error")
        }
        let data = await fetchedData.json()
        document.querySelector('p').innerHTML = `setup: ${data.setup} <br> punchline: ${data.punchline}`

    } catch (msg) {
        console.error(msg)
    }
}