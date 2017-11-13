"use strict";

// 1.1
/*
var human = {
    is: "alive",
    lifestyle:"breathing, that's all"
};

function isEmpty(human) {
    for(var key in human) {
        if(human.hasOwnProperty(key))
            return false;
    }
    return true;
}
*/
//1.2
var array = [];
function isEmpty(array) {
    for(var key in array) {
        if(array.hasOwnProperty(key))
            return false;
    }
    return true;
}
//??????????????77777Тут я згорів. Хотів за допомогою однієї функції вводити массив,
// а іншою зчитувати результат цієї функції і перевіряти чи він був введений чи порожній.
// Змусити працювати так як я хотів не зміг(на назву змінних можна не дивитись, все перороблялось 100 раз).
/*
    function createArray(array) {
    sumData=0;
    for(var i=0;i<array.length;i++){
        sumData = sumData + array[i];
    }
    console.log("sumData of this array: ");
    return sumData;
    isEmpty(sumData);
}
*/
//2
var codeObj = [45, 109, 32, 39, 1, 0];
    codeObj[codeObj.length] = 95; //з [codeObj.length+17] функція sumData не працює
function sumData(codeObj) {
    var sum=0;
    for(var i=0;i<codeObj.length;i++){
        sum = sum + codeObj[i];
    }
    console.log("sumData of this array: ");
    return sum;
}

//3
var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];
var count = data.length - 1;
    for (var i = 0; i < count; i++)
        for (var j = 0; j < count - i; j++)
            if (data[j] > data[j + 1]) {
                var max = data[j];
                data[j] = data[j + 1];
                data[j + 1] = max;
            }
function bubblePower(data) {
    console.log("Bubble done!:");
    return data;
}
