
//get element in index 0
//get element in index 1
//loop through the array
//compare element in index 0 with all the elements in the array
// if it encounters a bigger element bigger than index 0 swap it and continue comparing
// when done return maximum number
function maxNumber(array){
    let bigestNumber=array[0];
    let smallestNumber=array[0];

    for(let i = 1; i < array.length; i++){
        if(array[i]> bigestNumber ){
            bigestNumber=array[i];   
        }
        if(array[i]<smallestNumber){
            smallestNumber=array[i];
        }
    }
    return {biggest:bigestNumber,smallest:smallestNumber};
}
let array=maxNumber([2,4,100 ,30,5,-1,10,14])
console.log(array);