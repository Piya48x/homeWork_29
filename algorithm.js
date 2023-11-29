function printPrime(n) {
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  function isPrime(num) {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  // ตัวอย่างการเรียกใช้งาน
  printPrime(7);  // 2, 3, 5, 7
  console.log('-------------')
  printPrime(13); // 2, 3, 5, 7, 11, 13
  console.log('-------------')
  printPrime(14); // 2, 3, 5, 7, 11, 13
  