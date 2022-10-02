function stringSearchCount(word, value) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let matches = "";
    for (let j = 0, k = i; j < value.length; j++) {
      const wordEle = word[k];
      const searchElem = value[j];
      if (wordEle === searchElem) {
        matches += wordEle;
        console.log({ wordEle, searchElem, k, matches });
        if (matches === value) {
          ++count;
          matches = "";
          break;
        }
        ++k;
      } else {
        break;
      }
    }
  }
  return count;
}

function stringSearchCount_Colt(word, value) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (word[i + j] !== value[j]) break;
      if (j == value.length - 1) count++;
    }
  }
  return count;
}
