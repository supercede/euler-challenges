// Using string methods 'split', 'reverse' and 'join' to check palindrome 
// made the execution time longer (more than 2 times slower)

const checkPalindromeNum = param => {
    let rem, product = 0;
    let num = param;

    while(num > 0){
        rem = num % 10;
        num = parseInt(num/10);
        product = product * 10 + rem;
    }    

    return product === param;
}


const getPalindrome = () => {
    let palindrome = 1;
    for(let i = 999; i > 0; i--){
        for(let j = 999; j > 0; j--){

            let product = i * j;
            

            if(checkPalindromeNum(product)) {
                if(palindrome < product){
                    palindrome = product;
                }
            }
            
        }
    }
    return palindrome;
}

console.log(getPalindrome());