let num1 = 15;
let num2 = 3;
let op = "+";
let result;

if (op === "+") {
    result = num1 + num2;
}
else if (op === "-") {
    result = num1 - num2;
}
else if (op === "*") {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}
document.write('Result = ' + result);