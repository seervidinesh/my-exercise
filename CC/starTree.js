function starTree(n) {
    var output = "";
    for (var row = n; row >= 1; row--) {
        for (var column = 1; column <= n; column++) {
            if (column <= row - 1) output = output + " ";
            else output = output + "* ";
        }
        output = output + "\n";
    }
    return console.log(output);
}
starTree(7);

//        *
//       * *
//      * * *
//     * * * *
//    * * * * *
//   * * * * * *
//  * * * * * * *