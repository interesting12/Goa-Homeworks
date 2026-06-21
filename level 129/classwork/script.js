class Academy {
    static arr = []
    constructor(name, members, color) {
        this.name = name;
        this.members = members;
        this.color = color;
        Academy.arr.push(this)
    }
    get pixels() {
        return this.members / 5
    }
    get col() {
        return 
        <div style='width: 80px; height: ${this.pixels}px; background: ${this.color}'>
            <h2>${this.name}</h2>
            <p>${this.members}</p>
        </div>
    }
    static render() {
        let main = document.querySelector('main')
        Academy.arr.forEach(academy => {
            main.innerHTML += academy.col
        })
    }
}

new Academy('GOA', 1500, "green")
new Academy('Novatori', 1000, "yellow")
new Academy('IT', 1200, "blue")
Academy.render()