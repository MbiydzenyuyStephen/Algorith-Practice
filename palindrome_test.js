	// FUNCTION THAT CHECKS IF A STRING IS A PALINDROME OR NOT
	function check_palindrome(str){
    // First, we loop over the string  in forward and backward directions.
    // Check if all forward and backward character matches, and return true.
    // If all forward and backward character does not matches, return false.
    // If return is true, it is a palindrome
	let j = str.length -1;
	for( let i = 0 ; i < j/2 ;i++){
		let x = str[i] ;
		let y = str[j-i];
		if( x != y)
		{
		return false;
		}
	}
	return true;
	}
	function is_palindrome( str ){
	let ans = check_palindrome(str);
	if( ans == true ){
		console.log("passed string is palindrome ");
	}
	else{
		console.log("passed string not a palindrome");

	}
	}
	let test = "madam";
	is_palindrome(test);