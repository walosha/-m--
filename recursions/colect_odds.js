function collectOdds(arr) {
  let result = [];
  function helper(inputs) {
    if (inputs.length == 0) return;

    if (inputs[0] % 2 !== 0) {
      result.push(inputs[0]);
    }
    helper(inputs.slice(1));
  }
  helper(arr);
  return result;
}
