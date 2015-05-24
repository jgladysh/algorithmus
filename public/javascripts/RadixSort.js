/**
 * Created by julia on 5/18/15.
 */


exports.radixSort = function radixSort(arr) {
    var negativeNumbers = [];

    for (var m = 0; m < arr.length; m++) {
        if (arr[m] < 0) {
            negativeNumbers.push(arr.splice(m, 1) * (-1));
            m--;
        }
    }

    function sort(array) {

        var maxNum = Math.max.apply(Math, array);
        var lowestDigit = maxNum.toString().length;
        var auxiliaryArray1 = [];

        for (var i = 0; i < lowestDigit; i++) {

            //fill an array with 10 zeroes
            auxiliaryArray1 = Array.apply(null, new Array(10)).map(Number.prototype.valueOf, 0);

            for (var j = 0; j < array.length; j++) {
                var d = digit(array[j], i);
                auxiliaryArray1[d]++;
            }
            var count = 0;
            for (var l = 0; l < 9; l++) {
                var tmp = auxiliaryArray1[l];
                auxiliaryArray1[l] = count;
                count += tmp;
            }
            var auxiliaryArray2 = [];
            for (var k = 0; k < array.length; k++) {
                var d1 = digit(array[k], i);
                auxiliaryArray2[auxiliaryArray1[d1]] = array[k];
                auxiliaryArray1[d1]++;
            }

            array = auxiliaryArray2;

        }
        return array;
    }

    var positiveArr = sort(arr);
    var negativeArr = sort(negativeNumbers).reverse();
    for (var n = 0; n < negativeArr.length; n++) {
        negativeArr[n] = negativeArr[n] * (-1);
    }
    arr = negativeArr.concat(positiveArr);
    return arr;
};

//return digit of a number by index
var digit1 = function (number, index) {
    if (number.toString().charAt(index).length < 1) {
        return -1;
    }
    return parseInt(number.toString().charAt(index));
};

//return digit of a number by index
var digit = function (n, d) {
    return Math.floor(n / Math.pow(10, d)) % 10
};