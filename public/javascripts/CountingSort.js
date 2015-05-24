/**
 * Created by julia on 5/18/15.
 */

exports.countingSort = function countingSort(arr) {
    var maxNum = Math.max.apply(Math, arr);
    var arr1 = [];
    console.log(maxNum);
    for (var i = 0; i <= maxNum; i++) {
        arr1[i] = 0;
    }
    for (var j = 0; j < arr.length; j++) {
        arr1[arr[j]] = arr1[arr[j]] + 1;
    }
    var b = 0;
    for (var k = 0; k <= maxNum; k++) {
        for (var l = 0; l < arr1[k]; l++) {
            arr[b] = k;
            b++;
        }
    }
    return arr;
};