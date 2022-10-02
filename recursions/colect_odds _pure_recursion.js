function colect_odds(arr) {
  const result = [];
  if (arr.length == 0) {
    return result;
  }
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  return result.concat(colect_odds(arr.slice(1)));
}
