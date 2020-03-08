function sumofTwoNumWithGiven(array, given) {
  var left = 0;
  var right = array.length - 1;
  while (left < right) {
    var sum = array[left] + array[right];
    if (sum == given) {
      console.log("Pair : ", array[left], array[right]);
      left = left + 1;
      right = right - 1;
    } else if (sum < given) {
      left = left + 1;
    } else if (sum > given) {
      right = right - 1;
    }
  }
}
var input = [1, 2, 3, 5, 8, 9];
sumofTwoNumWithGiven(input, 7);
