//  Linear search

const arr = [1, 4, 6, 9, 6, 7, 8, 3, 11];
let count = 0;

function linearSearch(array, item) {

    for(let i = 0; 0 < array.length; i++) {
        count += 1;
        if(array[i] === item) {
            return i
        }
    }
    return null;
}


console.log(linearSearch(arr, 6));
console.log('count is ', count);