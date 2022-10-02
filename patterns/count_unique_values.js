function countUniqueValues(arr) {
  const uniqueCounter = {};
  let last = arr.length - 1;

  for (let value of arr) {
    if (!uniqueCounter[last]) {
      uniqueCounter[value] = 1;
    } else {
      return Object.keys(uniqueCounter);
    }

    if (!uniqueCounter[value]) {
      uniqueCounter[value] = 1;
      --last;
    } else {
      return Object.keys(uniqueCounter);
    }
  }

  return [];
}
