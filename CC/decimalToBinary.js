function decimalToBinary(num) {
    var output = [];
    while (num >= 1) {
        output.unshift(Math.floor(num % 2));
        num = num / 2;
    }
    return output.join("");
}
console.log(decimalToBinary(18));