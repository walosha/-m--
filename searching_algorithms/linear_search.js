function linear_search(arr, val) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
  return -1;
}
