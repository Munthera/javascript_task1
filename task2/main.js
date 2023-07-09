let operation =prompt("enter the operation (+, - , * , /):");
let num1 = number(prompt("enter the first number:"));
let num2 = number(prompt("enter the seconde number:"));

let result;

if(operation === "+"){
    result = num1 + num2;
}
else if(operation === "-"){
    result = num1 - num2;
}
else if(operation === "*"){
    result = num1 * num2;
}

else if(operation === "/"){
    result = num1 / num2;
}
else{
    console.log("invalid operation !");
}

if (result !== undefined){
    console.log("The result is:",result);
}


