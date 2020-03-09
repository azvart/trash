//Task 1
let strips = '#';

while(strips.length <= 7){
    console.log(strips);
    strips = strips + '#';
}
//Task 2


for(let i = 1; i <= 100; i++){
 if( (i % 3 == 0) && (i % 5 != 0)){
     console.log("Fizz");
 }else if((i % 5 == 0) && (i % 3 != 0)){
     console.log("Buzz");
 }else if((i % 3 == 0) && (i % 5 == 0)){
     console.log("FizzBuzz");
 }else{
     console.log(i);
 }
    
}

//Task 3
