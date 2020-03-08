function* iteratorFun1() {
    var array = [1, 2, 3, 4, 5];
    for (var val of array) yield val;
    yield* iteratorFun2();
}

function* iteratorFun2() {
    yield 7;
}

var iteratorVal = iteratorFun1();
do {
    var item = iteratorVal.next();
    console.log(item);
} while (item.done === false);