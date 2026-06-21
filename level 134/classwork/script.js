function usdToGel() {
    const usd = parseFloat(prompt("Enter $USD:")); // 20
    const course = 2.7;
    const gel = usd * course;
    console.log("$" +usd + " " +"-->" + " " + "₾" + gel)
  }
  usdToGel();