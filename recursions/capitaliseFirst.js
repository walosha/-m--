function capitaliseFirst(arr) {
  if (arr.length === 0) return "";

  if (arr[0]) {
    const word = arr[0];
    return (
      word.charAt(0).toUpperCase() +
      word.slice(1) +
      " " +
      capitaliseFirst(arr.slice(1))
    );
  }
}
