class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      if (b === 0) {
        return "Cannot divide by zero";
      }
      return a / b;
    }
  }
  
  // Example usage:
  console.log(Calculator.add(5, 3));
  console.log(Calculator.subtract(10, 4));
  console.log(Calculator.multiply(6, 7));
  console.log(Calculator.divide(8, 2));
  