function displayEvenNumbers(){
    const numbers = [1,2,3,4,5,6,7,8];
    const evenNumbers = [];
    for(var i=0; i<= numbers.length-1; i++){
        if(numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
        
    }   
    return evenNumbers; 
}
const result = displayEvenNumbers(); 
console.log(result); // should return [2,4,6,8] 