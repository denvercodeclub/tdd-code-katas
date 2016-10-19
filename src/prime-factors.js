module.exports = function primeFactors(number) {
  if (isNaN(number)) {
    throw new TypeError('Only parameters of type "number" allowed');
  }

  if (number % 1 !== 0 || number < 0) {
    throw new Error('Only positive integers allowed');
  }

  var primes = [];

  for (var candidate = 2; number > 1; candidate++) {
    for (; number % candidate == 0; number /= candidate) {
      primes.push(candidate);
    }
  }

  return primes;
};