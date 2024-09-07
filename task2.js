/*You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/
function sampleCount(numbers,find){
      
    let count = 0;
    
    for(let number of numbers){
        if(number === 5){
            count++;
        }
        else{
            count = 0;
        }
    }
    
    return count;

}
let find=5;
let number =sampleCount([5,6,11,12,98, 5],find);
console.log(find,  number);
find =25;
console.log(find,number);