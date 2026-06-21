async function joke() {
    try{
        let resp = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
        if(!resp.ok){
            throw new Error('error')
        }
        let data = await resp.json()
        let p = document.getElementById('joke');
        if(data.type === "single"){
            p.innerHTML = data.joke;
        }else {
            p.innerHTML = `setip: ${data.setup} <br> delivery: ${data.delivery}`;
        }
    } catch(err) {
        console.error(err)
    }
    
}
joke()
