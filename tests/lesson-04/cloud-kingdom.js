// Khai báo biến powerUp có giá trị là mushroom
let powerUp = "mushroom";

// Sử dụng câu điều kiện if...else để xác định tên hiệu ứng tương ứng với các powerUp
if (powerUp == "mushroom"){
    console.log("Mario becomes Super!");
}
else if (powerUp == "flower"){
    console.log("Mario can shoot fireballs!");
}
else if (powerUp == "star"){
    console.log("Mario is invincible!");
}
else if (powerUp == ""){
    console.log("Mario is normal");
}
else{
    console.log("Unknown power-up");
}