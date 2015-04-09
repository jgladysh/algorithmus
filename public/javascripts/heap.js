var heap = [],
    arr = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToHeap(int, heap) {

    heap[heap.length] = int;
    var intPosition = heap.length - 1,
        intLevel = Math.ceil(Math.log2(heap.length + 1)),
        intSide,
        currentPeakPosition;

    if (heap.length > 1) {

        getSide(intPosition);
        getCurrentPeakPosition(intPosition, intSide);

        while (heap[intPosition] > heap[currentPeakPosition] && intLevel > 1) {

            var temp = heap[intPosition];
            heap[intPosition] = heap[currentPeakPosition];
            heap[currentPeakPosition] = temp;
            intPosition = currentPeakPosition;
            intLevel--;
            getSide(intPosition);
            getCurrentPeakPosition(intPosition, intSide);

        }
    }

    function getSide(position) {
        if (position % 2 == 0) {
            intSide = 2; //right
        }
        else {
            intSide = 1; //left
        }
    }

    function getCurrentPeakPosition(position, side) {

        if (position - side != 0) {
            currentPeakPosition = (position - side) / 2;
        }
        else {
            currentPeakPosition = 0;
        }
    }

}

function sink(heap) {
    var position = 0;
    while (position * 2 + 1 < heap.length) {
        var j = 2 * position + 1;
        if (heap[j] < heap[j + 1]) j++;
        if (heap[j] < heap[position])
            return;

        var tmp = heap[j];
        heap[j] = heap[position];
        heap[position] = tmp;
        position = j;
    }
}

function extractPeak(heap) {
    var removed = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.splice(-1, 1);
    sink(heap);
    return removed;
}

exports.heapSort = function heapSort(arr) {
    var heap = [],
        sortedArray = [];
    for (var i = 0; i < arr.length; i++) {
        addToHeap(arr[i], heap);
    }
    for (var j = 0; j < arr.length; j++) {
        sortedArray[j] = extractPeak(heap);
    }
    return sortedArray;
};

//for testing

while (heap.length < 50) {
    var int = getRandomInt(1, 100);
    addToHeap(int, heap);
}
for (var i = 0; i < 50; i++) {
    arr[i] = getRandomInt(1, 100);
}

