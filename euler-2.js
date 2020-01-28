const sumFibonacci = () => {
    let sum = 2;
    const arr = [1, 2];
    for (let i = 0; i < Infinity; i++){
        let val = arr[arr.length -1] + arr[arr.length -2];
        if(val <= 4000000){
            if(val % 2 === 0){
                sum +=val
            }
            arr.push(val);
            val = 0;
        }else {
            return sum;
        }
    }
}

console.log(sumFibonacci());