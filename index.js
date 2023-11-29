let random = Math.random();
console.log(random);

let a = prompt("Enter first number :")
let b = prompt(" Enter opretion ")
let c = prompt("Enter second number :")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random > 0.1){

    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)   
}