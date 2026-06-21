const products = [
    {
      name: "Rolex",
      price: "$500",
      for: "For rich people",
      image: "https://th.bing.com/th/id/OIP.agMIn7ipjfg0L8yrlA3xSgHaFj?rs=1&pid=ImgDetMain"
    },
    {
      name: "Rolex",
      price: "$300",
      for: "For ultra rich people",
      image: "https://th.bing.com/th/id/OIP.P_Ve3mfJmWRaqfbfUEXkZwHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: "Rolex",
      price: "$700",
      for: "For normal people",
      image: "https://th.bing.com/th/id/OIP.RXGKC6O8gNQiFYg7HCkVlQHaG5?rs=1&pid=ImgDetMain"
    }
  ];

  const cardContainer = document.getElementById("cardContainer");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="card-body">
        <div class="card-title">${product.name}</div> 
        <div class="card-price">${product.price}</div> 
        <div class="card-for">${product.for}</div> <br>
        <a href="#" class="btn">Buy now</a>
      </div>
    `;
    cardContainer.appendChild(card);
  });