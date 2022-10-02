function sum_zero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    console.log({ left, right });
    const sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      --right;
    } else {
      ++left;
    }
  }
}
