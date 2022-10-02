function countDown(num) {
  if (num <= 1) {
    console.log(num);
    return;
  }

  console.log(num);
  return countDown(num - 1);
}
