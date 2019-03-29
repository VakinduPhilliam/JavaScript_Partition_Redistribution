
/* The following function iterates through an array of elements, identifying odd or even numbers and stores them separately in ascending order. */
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

var array=[56,1,3,44,12,5,7,45,11,13,46,86,24,35,79,97,13,35,75,23,56,45,86,80,97,13,46,86,24];

m(array);

//Sort Odd and Even array in ascending order

odd = sortList(odd)
even = sortList(even);


//Call storage variables

document.write("Odd Numbers: "+odd+"<p>");
document.write("Even Numbers: "+even);
