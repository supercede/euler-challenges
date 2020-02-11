// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const findLargestPrime = (num) => {
    let largePrime = 2;
    for(let i = 2; num >= Math.pow(i, 2);) {
        if(num % i === 0) {
            num /= i
            largePrime = num;
        }else{
            i++
        }
    }
    return largePrime;
}

console.log(findLargestPrime(600851475143));