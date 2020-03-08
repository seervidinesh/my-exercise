var plusOne = function(digits) {
    var carry = 1;
    var result = [];
    for (var i = digits.length - 1; i >= 0; i--) {
        var val = digits[i] + carry;
        result[i] = val % 10;
        carry = val / 10;
    }
    var retVal = []
    retVal[0] = 1;
    for (var i = 1; i < retVal.length; i++) digits[i] = 0;
    console.log(retVal)
}
plusOne([1,2,3])