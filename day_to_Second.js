function daysToSeconds(days) {
    // 1 วันมี 24 ชั่วโมง, 1 ชั่วโมงมี 60 นาที, 1 นาทีมี 60 วินาที
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;

    // คำนวณจำนวนวินาทีจากจำนวนวันที่รับเข้ามา
    const seconds = days * hoursPerDay * minutesPerHour * secondsPerMinute;

    return seconds;
}

// ตัวอย่างการใช้งาน
const daysInput = 8;
const secondsOutput = daysToSeconds(daysInput);
console.log(`${daysInput} วัน เท่ากับ ${secondsOutput} วินาที`);
