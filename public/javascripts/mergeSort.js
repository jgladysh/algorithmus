var merge = function (leftArr, rightArr) {
    var result = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] > rightArr[0]) {
            result.push(rightArr[0]);
            rightArr = rightArr.splice(1);
        }
        else {
            result.push(leftArr[0]);
            leftArr = leftArr.splice(1);
        }
    }
    while (leftArr.length > 0) {
        result.push(leftArr[0]);
        leftArr = leftArr.splice(1);
    }
    while (rightArr.length > 0) {
        result.push(rightArr[0]);
        rightArr = rightArr.splice(1);
    }
    console.log(result);
    return result;
};

exports.mergeSort = function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [];
    var right = [];

    var middle = arr.length / 2;

    for (var i = 0; i < arr.length; i++) {
        if (i < middle) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);

};