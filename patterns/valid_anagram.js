function valid_anagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let charMap1 = {};
  let charMap2 = {};
  for (let char of str1) {
    if (charMap1[char]) {
      charMap1[char]++;
    } else {
      charMap1[char] = 1;
    }
  }

  for (let char of str2) {
    if (charMap2[char]) {
      charMap2[char]++;
    } else {
      charMap2[char] = 1;
    }
  }

  for (let key in charMap1) {
    if (charMap2[key]) {
      // if values in both objects differ return false
      if (charMap1[key] !== charMap2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

//better solution

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
