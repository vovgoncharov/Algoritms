"use strict";
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEl = (arr, item) => {
    let start = 0;
    let lastEl = arr.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= lastEl) {
        middle = Math.floor((start + lastEl) / 2);
        if (arr[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < arr[middle]) {
            lastEl = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position
};
console.log(getEl(arr, 2));
