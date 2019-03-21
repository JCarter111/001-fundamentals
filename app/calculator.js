function add(a, b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function isOdd(a) {
    if (a % 2 == 1) 
        return true;
     else 
        return false; 
}
function isEven(a) {
    if (a % 2 == 1) 
        return false;
     else 
        return true; 
}
function divisibleBy(a, b) {
    if (a % b == 0) 
        return true;
     else 
        return false; 
}
function square(a) {
    return a * a;
}
function square2(a) {
    return Math.pow(a,2);
}
module.exports = {
    add,
    subtract,
    multiply,
    isOdd,
    isEven,
    divisibleBy,
    square,
    square2
};