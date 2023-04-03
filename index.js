const factorial = (n) => {
  if (n >= 0) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  } else {
    console.error('Argument has to be greater or equal than zero');
  }
};

module.exports = factorial;
