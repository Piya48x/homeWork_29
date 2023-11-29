function fahrenheitToCelsius(fahrenheit) {
    // ใส่สูตรการแปลงอุณหภูมิ Fahrenheit เป็น Celsius ที่ถูกต้อง
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
  // ตัวอย่างการเรียกใช้งาน
  const fahrenheitTemperature = 25; // เป็นตัวอย่างอุณหภูมิ Fahrenheit
  const celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
  console.log(`${fahrenheitTemperature} องศา Fahrenheit เท่ากับ ${celsiusTemperature.toFixed(2)} องศา Celsius`);
  