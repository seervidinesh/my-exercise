const removeValFromArr = (array , val) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === val){
            array.splice(i,1);
            i--;
        }
    }
    return array
}
console.log(removeValFromArr([3,2,2,3] ,3))