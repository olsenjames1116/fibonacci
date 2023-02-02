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

function fibsRec(n) {
    if (n===1) {
        return [0];
    }
    
    if (n===2) {
        return [0, 1];
    }

    let array = fibsRec(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
}