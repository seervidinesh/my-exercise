const pascalTriangle = (n) => {
    var array = [];
    array[0] = [1];
    array[1] = [1,1];
    if(n === 0) return [];
    if(n === 1)  return [[1]];
    for (let i = 2; i < n; i++) {
        array[i] = [1];
        for (let j = 1; j <= i - 1; j++) {
            array[i][j] = array[i-1][j] + array[i-1][j-1];
            array[i].push(1);
        }
    }
    return array;
}
console.log(pascalTriangle(6))