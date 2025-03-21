function isPrime(number) {
    if (number < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false; // Divisible by another number
    }
    return true; // It's a prime number
  }
  
  function findPrimesUpTo(limit) {
    const primes = [];
    for (let num = 1; num <= limit; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }
  
  const primes = findPrimesUpTo(1000);
  console.log("Prime numbers from 1 to 1000:", primes);
  