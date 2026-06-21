function changeTextColor(color, callback) {
    setTimeout(() => {
        document.body.style.color = color;
        callback();
    }, 2000);
}

changeTextColor("red", () => {
    console.log("ტექსტის ფერი წარმატებით შეიცვალა!");
});
