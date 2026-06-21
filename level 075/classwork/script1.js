const form = document.querySelector("form");
const ol = document.querySelector("ol");

let counter = 0;

function deleteItem(id) {
    const item = document.getElementById(id);
    ol.removeChild(item);
}


form.addEventListener("submit", function(e) {
    e.preventDefault();

    // ფორმიდან ვირჩევ შესატან ველს, შემდეგ კი მაგ შესატანი ველიდან მომაქვს მნიშვნელობა
    const itemValue = form.item.value;

    // ვქმნით ახალ თეგს რომელიც არის li - list item
    const li = document.createElement("li");

    // ახალ შექმნილ თეგში შევცვალე ტექსტი და მივანიჭე მომხმ,არებლის შემოტანილი მნიშნელობა
    li.textContent = itemValue;

    // ახალ შექმნილ თეგს ვუცვლი და ვანიშებ უნიკალურ id 
    li.id = `item-${counter}`;

    li.onclick = function() {
        deleteItem(li.id);
    }

    // ყოველ დადასტურებაზე ვზრდი counter ცვლადს ერთით
    counter++;

    // წამოღებულ სიაში ვამატებ ახალ შვილ ელემენტს რომელიც ძემოთ მოცემულ კოდში შევქმენი და შევცვალე
    ol.appendChild(li);
})

document.getelemen