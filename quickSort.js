const arr = [0, 3, 2, 5, 6, 8, 4, 2, 1, 2, 9, 6, 4, 7, -1, -5, 23, 6, 2, 3, 32, 10 ,-1, 27];
let count = 0;

function quickSort(array) {
    if(array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i ++) { 
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }

        count += 1;
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log('count = ', count);