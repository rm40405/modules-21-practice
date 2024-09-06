function noDuplicate(arr){
    let result = [];
    for(let array of arr){
        if(result.includes(array)===false){
            result.push(array);

        }

    }
    return result;

}
let array = noDuplicate(['kalam','salam','malam','kalam','salam','malam','gelam','alam,']);
console.log(array);