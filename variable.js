let one = 4>3 && 10<12;
 
if(one = '4>3' && 10<12){
    console.log('true');
}else{
    console.log('false');
}

let two = 4>3 && 10>12;

if(two = '4>3' && 10>12) {
    console.log('true');
}else{
    console.log('false');
}

let three = 4>3 || 10>12;

if(three ='4>3' || 10<12){
    console.log('true');
}else{
    console.log('false');
}

let four = 4>3 || 10>12;

if(four = '4>3' || 10>12){
    console.log('true');
}else{
    console.log('false');
}

let five = 4;

if(five = '!(4>3)'){
    console.log('true');
}else{
    console.log('false');
}

let six = 4;

if(six = '!4<3'){
    console.log('true');
}else{
    console.log('false');
}

let eight = 4;

if(eight = 4>3 && 10<12){
    console.log('true');
}else{
    console.log('false');
}

let nine = 4;

if(nine =!4>3 && 10>12){
    console.log('true');
}else{
    console.log('false');
}

let ten = 4;

if(ten = !4 === "4"){
    console.log('true');
}else{
    console.log('false');
}


let age=prompt("Насаа оруулна уу");
let myAge = 100;

if(myAge < age) {
    console.log("та надаас ах");
}else if(myAge == age){
    console.log("2лаа чацуу")
}
else{
    console.log("та надаас дүү");
}



