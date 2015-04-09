exports.insertionSort = function insertionSort(arr) {

    for (var i = 1; i < arr.length; i++) {
        var used = arr[i],
            position = i;

        for (var j = i - 1; j >= 0; j--) {

            if (used < arr[j]) {
                var temp = arr[j];
                arr[j] = used;
                arr[position] = temp;
                position--;
                used = arr[position];
            }
        }
    }

    return arr;
};