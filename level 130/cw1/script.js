async function func() {
    try{
        let resp = await fetch('https://dog.ceo/api/breeds/image/random')
        if(!resp.ok){
            throw new Error('error')
        }
        let data = await resp.json()
        let img = document.getElementById('dogimg');
        img.src = data.message;
        return(data)
    } catch(err) {
        console.error(err)
    }
    
}
