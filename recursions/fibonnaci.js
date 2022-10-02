function fibonnaci(num) {
  let result = [1, 1];
  let number = num;

  function helper(input) {
    if (input < 3) return result;

    result.push(result[result.length - 1] + result[result.length - 2]);

    if (result.length == number) {
      return result;
    }
    return helper(input);
  }

  return helper(num)[result.length - 1];
}

// Pure Fibonacci

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
