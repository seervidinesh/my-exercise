var array = [2, 6, 9, 3, 4, 8, 4, 1]

function mergeSort(array, left, right) {
    if (left < right) {
        var mid = Math.floor((left + right) / 2);
        mergeSort(array, left, mid);
        mergeSort(array, mid + 1, right);
        merge(array, left, mid, right);
    }
}

function merge(array, left, mid, right) {
    var i, j, k;
    var n1 = mid - left + 1;
    var n2 = right - mid;
    var L, R;
    for (var i = 0; i < n1; i++)
        L[i] = array[left + i]
    for (var j = 0; j < n2; j++)
        R[i] = array[mid + left + j]
    i = 0;
    j = 0;
    k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            array[k] = L[i]
            i++
        } else {
            array[k] = R[j]
            j++
        }
        k++
    }
    while (i < n1) {
        array[k] = L[i]
        i++
        k++
    }
    while (j < n2) {
        array[k] = R[j]
        j++;
        k++;
    }
}
console.log(mergeSort(array, 2, 1));