/*
Write a function to convert temperature from Celsius to Fahrenheit.
*/
function convertTemperture(celsi){

    let Fahrenheit = (celsi *9/5)+32;
    return Fahrenheit;

}
console.log("Converting Temperature to fahrenheit " +convertTemperture(36));
