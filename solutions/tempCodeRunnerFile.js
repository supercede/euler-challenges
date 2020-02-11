    let rem, product = 0;
    let num = param;

    while(num > 0){
        rem = num % 10;
        num = parseInt(num/10);
        product = product * 10 + rem;
    }    
