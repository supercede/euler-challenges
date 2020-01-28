const sumNumbers = (num) => {
    if(typeof(num) !== 'number') {
        console.log(typeof(num));
        
        return 'Please enter a number'
    }
    let sum = 0;

    let index = 0;
    while(index < num){
        if(index % 3 === 0 || index % 5 === 0){
            sum+=index;
        }
        index++;
    }
    return sum;
}

console.log(sumNumbers(1000));