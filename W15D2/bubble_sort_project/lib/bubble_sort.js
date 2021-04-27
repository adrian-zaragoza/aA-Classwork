function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    return array;
}

function bubbleSort(array) {

}


module.exports = {
    bubbleSort,
    swap
};