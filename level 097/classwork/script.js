const obj = {
    name: "girogi",
    surname: "shavadze",
}

for(let key in obj){
    if (obj[key].length < 5){
        console.log(obj)
    }
}