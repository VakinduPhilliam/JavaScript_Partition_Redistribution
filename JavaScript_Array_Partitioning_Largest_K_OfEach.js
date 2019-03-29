
/* The following function iterates through an array of elements, identifying the largest K Odd and Even numbers of each. */
/* Array Element Partition Redistributioning */
/* Written in JavaScript. */
/* Written by Vakindu Philliam. */

//Declare storage variables

var even =[];
var odd=[];

/*Function to identify and partition even or odd  numbers from a given array*/

var m = function partition(list){

//Iterate through list

for(var i=0;i<list.length;i++){

//Identify odd numbers and store in the even array

if((list[i]%2)>0){

odd.push(list[i]);

} else {

//Else, the number is even

even.push(list[i]);

    }
  }

}

//The following Merge Sort Function Algorithm sorts the partitions into ascending order

function sortList(list) {

  if (list.length === 1) {

    // return once we hit an array with a single item

    return list
  }

	// Split the array into halves and merge them recursively 
  // get the middle item of the array rounded down

  var middle = ((list.length) / 2) 
  
	// items on the left side
	
  var left = list.slice(0, middle) 
	
	// items on the right side
	
  var right = list.slice(middle) 

	//Return the indices
	
  return merge(
    sortList(left),
    sortList(right)
  )
}

// compare the arrays item by item and return the concatenated result

function merge (left, right) {
  var result = [];
  var indexLeft = 0;
  var indexRight = 0;
while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

	//Coalesce partitions
	
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

//Run function

var array=[56,1,975,3,157,44,12,5,46,7,45,11,35,864,67,97,13,45,69,79,55,58,13,46,56,86,24,35,79,97,13,642,35,78,75,23,56,24,84,90,21,80,45,86,80,97,13,46,86,24];

m(array);

//Sort Odd and Even array in ascending order

odd = sortList(odd)
even = sortList(even);

//Identify number of odd and even numbers

var lengthOdd=odd.length;

var lengthEven=even.length;

//Define and initialize largest k to your preferred integer; 5,10,15,20,25, ETC...

var k = 10;

//Identify the largest numbers in each

var largestOdd=odd.slice(lengthOdd-k,lengthOdd);
var largestEven=even.slice(lengthEven-k,lengthEven);

//Call storage variables

document.write("Largest "+k+" Odd Numbers: "+largestOdd+"<p>");
document.write("Largest "+k+" Even Numbers: "+largestEven);
