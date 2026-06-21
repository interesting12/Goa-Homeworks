const paragraph = document.getElementById("paragraphID");
paragraphh.addEventListener("click", function() {
    alert("სახელი: გიორგი, გვარი: შავაძე");
});

const paragraphs = document.getElementsByClassName("paragraph");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = `პარაგრაფი ${i + 1} შეიცვალა`;
    paragraphs[i].style.color = "blue"; 
}
