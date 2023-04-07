// Write a function that accepts an array of strings and console.logs each element using a for loop.
function countries(numb){
for(let i=0;i<numb.length;i++){ 
console.log(numb[i])
}
}
let numb=[ "Kenya","Uganda","Rwanda","Somali"];
countries(numb);

// Write a function that accepts an array of numbers and uses the 
// forEach() method to console.log each number multiplied

function numbers(num){  
    num.forEach(num=> {
       console.log(num*2)
    }) 
}
 const num=[79,20,35,12];
 numbers(num);
// Write a function that takes in an array of numbers and consoles the first four items 
// multiplied by 8 and the last two added by 5. 
// Console the array with the new values

// function newValues(array){
//     array.forEach(array=>{
//         console.log((0,4)array*8)
//     })



// }

// Write a function that takes in the following array and use a while loop 
// to iterate and break when the item is equal to the fourth index
function array(num){
    let i=0;
   while(i<num.length){
    console.log(num)
    i++;  
    if(i===5){ 
    break;
    }
}
}
const arrNum= [1,2,3,4,5,6,7,8,9];
array(arrNum);

// Write a function that takes in an array of strings and use a continue statement 
// when the item is at the second index
function fruit(fruits){ 
for(let i =0;i<fruits.length;i++){
    if(i===2){
     continue;
  }
  console.log("fruits",fruits[i]);

}

 }
let fruits= ['apple','plum','banana','strawberries','kiwi'];
fruit(fruits)






