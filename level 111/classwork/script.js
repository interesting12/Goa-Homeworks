class Square {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    getPerimeter() {
      return (this.length + this.width) * 2;
    }
  }
  
const rect = new Square(10, 5);