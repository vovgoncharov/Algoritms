"use strict";
//Пузырьковая сортировка
const arr = [1, 2, 53, 34, 25, 16, 7, 8, 9, 0];
const toSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr
};
console.log(toSort(arr));
