//Loop through the array from position 0
//Loop through the array from position 1
// add number at position 0 and number at position 1
// if it is = to target number
// it display the numbers


function twoSum(nums, target) {
    let t =[]
    
    for (let i = 0; i < nums.length; i++) {
        let num1=nums[i]
      for (let j = i + 1; j < nums.length; j++) {
        let num2=nums[j]
        if (num1 + num2 === target) {
          t.push([num1, num2]);
             
        }
      }

    }
    return t;
}

  
  console.log(twoSum([10,20,10,40,50,60,70,30],100));