// get element in index 0
// get element in index 1
// loop through the array
// compare element in index 0 with all the elements in the array
// if it encounters another element lesser than index 0 swap it and continue comparing
// when done return minimum number
function minimumNumber(array){
    let smallest=array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i]< smallest){
            smallest=array[i];
        }
    }
    return smallest;
}
let array=minimumNumber([4,5,2,10,14,30])
console.log(array);