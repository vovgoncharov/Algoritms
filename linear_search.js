"use strict";
const arr = [1, 2, 4, 6, 8, 10, 11];
let count = 0;
const getItem = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        count += 1;
        if (arr[i] === item) {
            return i;
        }
    }
    return count;
};
console.log(getItem(arr, 10));
console.log(count)