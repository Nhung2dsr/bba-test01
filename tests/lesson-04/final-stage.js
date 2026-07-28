function findPairsDivisibleBy17(){
    let count = 0;

    for (let i = 0; i <= 100; i++){
        for (let j = i; j <= 100; j++){
            if((i + j) % 17 == 0){
                console.log(`${count + 1}. Cặp số: (${i}, ${j}) = ${i + j}`);
                count++;
            }
        }
    }
    console.log(`Tổng cộng có: ${count} cặp số từ 1 đến 100 có tổng chia hết cho 17`);
}

findPairsDivisibleBy17();