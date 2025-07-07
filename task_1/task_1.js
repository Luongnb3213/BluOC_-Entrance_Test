const frequentWords = (textArray) => {
  let result = [];
  let frequent = new Map();
  let maxCount = 0;
  for (let i = 0; i < textArray.length; i++) {
    const wordLength = textArray[i].length;
    if (frequent.has(wordLength)) {
      frequent.get(wordLength).push(textArray[i]);
    } else {
      frequent.set(wordLength, [textArray[i]]);
    }
  }
  frequent.forEach((words) => {
    if (words.length > maxCount) {
      maxCount = words.length;
      result = words;
    }
  });

  return result;
};

console.log(frequentWords(['a', 'ab', 'abc', 'cd', 'def', 'gh']));
// ['ab', 'cd', 'gh']

console.log(frequentWords(['hi', 'hello', 'hey', 'yo']));
// ['hi', 'hey', 'yo']

console.log(frequentWords(['one', 'two', 'six']));
// ['one', 'two', 'six']

console.log(frequentWords(['a', 'bb', 'ccc', 'dd', 'eee', 'ff']));
// ['bb', 'dd', 'ff']

console.log(frequentWords([]));
// []

console.log(frequentWords(['onlyone']));
// ['onlyone']
