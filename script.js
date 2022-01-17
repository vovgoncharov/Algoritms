"use strict";
let list = 1000000000;
//Algoritm which solve logarifm
const getTime = (el) => {
    let res = 1;
    let re = 0;
    for (let i = 0; res < el; i++) {
        res*=2;
        re++
    }
    return re
};
console.log(getTime(list));

let day = 11.57;
let bDay = 0.03;
