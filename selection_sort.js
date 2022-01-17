"use strict";
// Сортировка выбором
const arr = [1, 2, 53, 34, 25, 16, 7, 8, 9, 0];

const getSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        let tap = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = tap;
    }
    return arr;
};
console.log(getSort(arr));
