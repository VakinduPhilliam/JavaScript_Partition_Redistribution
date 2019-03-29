
/* Sorting the elements of an array in ascending order using Merge Sort Algorithm. */
/* This Algorithm will be used in many of the examples of Array Element Partition Redistribution. */
/* Written in JavaScript. */
/* Written by Vakindu Philliam. */

var m = function mergeSort (list) {

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
    mergeSort(left),
    mergeSort(right)
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

var array = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]

document.write(m(array)) 

//Output: [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

