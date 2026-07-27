// Khai báo các biến
let playerName = "Mario";
let currentLives = 3;

// Các hằng số lưu coins theo level
const coins = {
    'Level 1': 25,
    'Level 2': 30,
    'Level 3': 45
};

// Tính tổng coin của 3 level
const tongCoins = coins['Level 1'] + coins['Level 2'] + coins['Level 3'];
console.log("Tổng coins của 3 level là: " + tongCoins);

// Tính giá trị trung bình
const avg = tongCoins/3;
console.log("Giá trị coin trung bình của 3 level là: " + avg);

// In ra số coin dư khi chia tổng số coin cho 3
const coinDu = tongCoins % 3;
console.log ("Số coin dư khi chia tổng số coin cho 3 là: " + coinDu);
