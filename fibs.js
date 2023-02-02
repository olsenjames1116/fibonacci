function fibs(n) {
    let array = [];
    let num1 = 0;
    let num2 = 1;
    let total = 0;
    for(let i = 1; i <= n; i++) {
        if(i===1){
            array.push(num1);
        } else if(i===2){
            array.push(num2);
        } else {
            total = num1 + num2;
            array.push(total);
            num1 = num2;
            num2 = total;
        }
    }
    
    return array;
}