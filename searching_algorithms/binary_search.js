function binarySearh(sortedArr, val) {
  let first = 0;
  let last = sortedArr.length - 1;
  let middle = Math.floor((first + last) / 2);
  let loop_count = 0;
  while (first <= last) {
    loop_count++;
    if (val === sortedArr[middle]) return middle;
    if (val === sortedArr[first]) return first;
    if (val === sortedArr[last]) return last;

    if (val > sortedArr[middle]) {
      first = ++middle;
    }
    if (val < sortedArr[middle]) {
      last = --middle;
    }
  }
  console.log({ loop_count });
  return -1;
}

binarySearh([2, 3, 4, 5, 6, 7, 8], 8);
