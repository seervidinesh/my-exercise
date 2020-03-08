function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    var key = parseInt(array[i]);
    var j = i - 1;
    while (j >= 0 && parseInt(array[j]) > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(insertionSort([1, 5, 9, 2, 4, 6, 7, 3]));
