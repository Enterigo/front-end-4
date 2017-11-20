"use strict";

// 1.1

var human = {
    is: "alive",
    lifestyle:"breathing, that's all"
};

function testisEmpty(human) {
    for(var key in human) {
        if(human.hasOwnProperty(key))
            return true;
    }
    return false;
}

//1.2
var array = [];
var sum = 0;
function isEmpty(array) {
    for(var key in array) {
        if(array.hasOwnProperty(key))
            return true;
    }
    return false;
}
    function createArray(array) {
    for(var i=0;i<array.length;i++){
        sum = sum + array[i];
    }
    console.log("sumData of this array: ");
        isEmpty(array);
        return sum;
}

//2
var codeObj = {
    'length': [45, 109, 32, 39, 1, 0]
    };
    codeObj['length'][23]=95;
    function sumData(array) {
        var sum=0;
        for (var i in array){
            console.log(array[i]);
            if(typeof array[i] === 'number')
                sum += array[i];
        }
        return sum;

    }
    sumData(codeObj['length']);

//3
var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];
function bubblePower(data) {
    var count = data.length - 1;
    for (var i = 0; i < count; i++)
        for (var j = 0; j < count - i; j++)
            if (data[j] > data[j + 1]) {
                var max = data[j];
                data[j] = data[j + 1];
                data[j + 1] = max;
            }
    console.log("Bubble done!:");
    return data;
}
