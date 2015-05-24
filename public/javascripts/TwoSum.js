/**
 * Created by julia on 5/17/15.
 * @return {string}
 */

var sorter = require('./RadixSort');

var twoSum1 = function (arr, int) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == int) {
                result = result + arr[i] + ' & ' + arr[j] + '\n'
            }
        }
    }
    console.log(result);
    return result;
};

exports.twoSum2 = function twoSum2(arr, int) {
    var sortedArr = sorter.radixSort(arr);
    var result = '';

    while (sortedArr.length > 1) {
        var start = 0;
        var end = sortedArr.length - 1;
        var sum = sortedArr[start] + sortedArr[end];
        if (sum == int) {
            result = result + sortedArr[start] + ' & ' + sortedArr[end] + '\n';
            sortedArr.splice(0, 1);
            sortedArr.splice(-1, 1);
        }
        else if (sum > int) {
            sortedArr.splice(-1, 1);
        }
        else {
            sortedArr.splice(0, 1);
        }
    }
    console.log(result);
    return result;
};