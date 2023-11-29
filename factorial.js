function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // ตัวอย่างการเรียกใช้งาน
  const number = 9;
  const result = factorial(number);
  console.log(`Factorial of ${number} is: ${result}`);
  