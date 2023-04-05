// Write a function that accepts an array of strings and console.logs each element using a for loop.

let arr= ["Kalisa","Mutesi","Linda","James","Hunter"];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let arr1=[23,5,12,4,75,8,90];
arr1.forEach(element => {console.log(element*2);
    
     });
// Write a function that takes in an array of numbers and consoles the first four items multiplied 
// by 8 and the last two added by 5. Console the array with the new values



let arr2=[1,3,6,7,8,10];

for(i=0;i<arr2.length;i++){

    if(i===4){
    break;
    
    
    }
   
    console.log((arr2[i])*8)

   }
   var lastElements=[arr2.length-2,arr2.length-1]
  
   lastElements.forEach(element=>{console.log(element+5)})

   


// arr2 [arr2.length-2]+=5
// arr2 [arr2.length-1]+=5

// Write a function that takes in the following array and use a while loop 
// to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];

i=0

   while(i<arrNum.length){
   
    console.log(arrNum[i])
    i++
    if(i===5){
        break;
    }
    
   }

//    Write a function that takes in a an array of strings and use a continue 
//statement when the item is at the second index

let arr3= ['apple','plum','banana','strawberries','kiwi']

for(let i=0; i<arr3.length;i++){
    console.log(arr3[i])

    if(i===2){
        continue;
    }
}



