function mergeSort(array) {
  if (array.length < 2) return array;
  var mid = Math.floor(array.length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [],
    l = 0,
    r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort([2, 6, 8, 3, 4, 9, 5, 7]));
