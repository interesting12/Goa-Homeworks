const generatedIDs = [];

document.getElementById('generate-btn').addEventListener('click', () => {
    const newID = `ID-${Math.floor(Math.random() * 10000)}`;
    generatedIDs.push(newID);
    const idList = document.getElementById('id-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${newID} - ${generatedIDs.length - 1}`;
    idList.appendChild(listItem);
});

document.getElementById('search-btn').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value;
    const output = document.getElementById('output');
    const index = generatedIDs.indexOf(searchInput);
    if (index !== -1) {
        output.textContent = `ID: ${searchInput} ნაპოვნია, ინდექსი: ${index}`;
    } else {
        output.textContent = `ID: ${searchInput} არ მოიძებნა.`;
    }
});
