function evenSumAvg(numbers){
    let sum=0;
    let arr=[];
  for(const number of numbers){
    if(number%2===0){
        arr.push(number);
        
        sum=sum+number;

    }
  }
  console.log(arr);
  let avg=sum/numbers.length;
  return avg;
}
let num = evenSumAvg([2,4,7,9,100,2,4,6,8]);
console.log(num);