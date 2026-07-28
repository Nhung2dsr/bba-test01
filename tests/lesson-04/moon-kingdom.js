//Bài 1: Tạo hàm createCharacters
function createCharacters(){

    // Khai báo mảng các object
    const characters = [
        {name: "Nhung", level: 25, health: 500},
        {name: "Duy", level: 50, health: 800},
        {name: "Yến", level: 5, health: 100},
    ];

    // Tạo mảng mới với thuộc tính name Upper của name gốc, level x 2 level gốc, health x 3 health gốc
    const charactersPowerUp = characters.map((moi) =>
        ({
            name: moi.name.toUpperCase(),
            level: moi.level * 2,
            health: moi.health * 3
        }));

    // Lọc các phần tử có chỉ số health > 1000
    const possibleWinners = charactersPowerUp.filter(loc => loc.health > 1000);
    
    console.log("MẢNG MỚI VỚI TÊN ĐƯỢC VIẾT HOA, LEVEL GẤP ĐÔI, HEALTH GẤP 3 MẢNG GỐC:");
    console.log(charactersPowerUp);
    console.log("CÁC PHẦN TỬ CÓ TRONG MẢNG CÓ CHỈ SỐ HEALTH > 1000:");
    console.log(possibleWinners);
}

// Bài 2: Tạo hàm printLeaderboard
function printLeaderboard(){
    // Tạo mảng players với các đối tượng
    const players = [
        {name: "Mario", score: 1000},
        {name: "Luigi", score: 700},
        {name: "Peach", score: 850},
        {name: "Yoshi", score: 900},
        {name: "Phong", score: 500}
    ]

    // Sắp xếp mảng player theo thứ tự score từ cao đến thấp
    players.sort((a, b) => b.score - a.score);

    // In ra mảng score đã sắp xếp từ cao đến thấp
    console.log("MẢNG ĐÃ SẮP XẾP THỨ TỰ SCORE TỪ CAO ĐẾN THẤP:")
    console.log(players);

    //In ra bảng xếp hạng với 3 vị trí
    console.log ("BẢNG XẾP HẠNG:")
    
    for(let i = 0;  i< players.length; i++) {
        let huychuong = ""; 
        if (i == 0){
            huychuong = "🥇";
        }
        else if(i == 1){
            huychuong = "🥈";
        }
        else if(i == 2){
            huychuong = "🥉";
        }
        
        console.log(`${huychuong} ${i + 1}. ${players[i].name} ${players[i].score} pts`);
    }

}

// Gọi hàm để thực thi bài 1
console.log("Bài 1:");
createCharacters();

// Gọi hàm để thực thi bài 2
console.log("Bài 2:");
printLeaderboard();