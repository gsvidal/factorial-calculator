const factorial = (n: number): number => {
  if (n >= 0) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  } else {
    // Is not posible (at least in math theory to calculate a negative number's factorial) also includes case that user doesn't input a number 
    return NaN;
  }
};

export default factorial;