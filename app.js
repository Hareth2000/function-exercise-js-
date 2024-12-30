
//Q1
let number = 532443;
let array = [];
let number2 = number.toString();
for(let i = number2.length -1 ; i>=0 ; i--){
array.push(number2[i]);
}
console.log(array.join(''));
///////////////////////////////////////////////////
//Q2
for(let i = 0 ; i<=15 ; i++){
if(i%2 == 0){
console.log(i+"  is even")
}else{
    console.log(i+" is odd")   
}
}
///////////////////////////////////////////////////
 //Q3
let str = "orange";
let asciiCodes = [];
let result = '';
for (let i = 0; i < str.length; i++) {
    asciiCodes.push(str.charCodeAt(i));
}
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let sortedNumbers = bubbleSort(asciiCodes);
for (let i = 0; i < asciiCodes.length; i++) {
    result += String.fromCharCode(asciiCodes[i]);
}
console.log(result); 
///////////////////////////////////////////////////
//Q4 
let num = prompt("Enter your number please");
let result2 = ""; 

for (let i = 0; i < num.length; i++) {
    result2 += num[i]; 
    
    if (+num[i] % 2 === 0 && +num[i + 1] % 2 === 0) {
        result2 += "-"; 
    }
}
console.log(result2); 
///////////////////////////////////////////////////
//Q5

function AgeChecker(age) {
    if (age >= 18) {
        return "The user is Adult";
    } else {
        return "The user is Minor";
    }
}
let userAge = prompt("Enter your age please");
console.log(AgeChecker(userAge));


