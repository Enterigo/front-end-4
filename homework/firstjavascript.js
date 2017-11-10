"use strict";
console.log("min - найменше значення");
console.log("average - середнє");
console.log("exponent - піднесення до степеня");
var a, b;
function min (a,b) {
    if(a>b){
        console.log("Найменше значення - ", b)}
    else if(b>a){
        console.log("Найменше значення - ", a)}
    else if(a==b){
        console.log("Значення рівні")}
}
function average (a,b) {
    a=(a+b)/2;
    console.log("Середнє значення - ", a);
}
function exponent (a,b) {
    if(a && b >0){
        var c=Math.pow(a,b); console.log("В результаті піднесення числа ", a, "до степеня ", b,"вийшло ", c)}
    else if(a == 0 && b>0){
        c=b*b; console.log("В результаті піднесення числа ", b, "до квадрату, вийшло ", c)}
    else if(a>0 && b == 0){
        c=a*a; console.log("В результаті піднесення числа ", a, "до квадрату, вийшло ", c)}
    else if(a==0 && b==0){console.log("Mission Impossible! Unlucky...")}
}