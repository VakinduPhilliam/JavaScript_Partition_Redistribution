/* Merge Sort Algorithm Implementation in JavaScript. */
/* Function to sort the elements of an array in ascending order. */
/* Top K elements of an array. */

function mergesort(list,k){

//Return list if one element or none

if(list.length<=1){

return list;

}

//Partition array

var middle = (list.length)/2;
var left = list.slice(0,middle);
var right = list.slice(middle);

//Return sorted partitions

var sorted = merge(mergesort(left,left.length),mergesort(right,right.length));

return sorted.slice(0,k);

}

//Define merge function

function merge(left,right){

//Declare variables

var result=[];
var leftIndex=0;
var rightIndex=0;

//Iterate through left and right partitions

while(leftIndex < left.length && rightIndex < right.length){

//Compare elements of right and left array

if(left[leftIndex]>right[rightIndex]){

//Push into result

result.push(left[leftIndex]);

leftIndex++;

} else {

result.push(right[rightIndex]);

rightIndex++;

  }
}

return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

//Run function

var array=[56,12,11,34,56,1,1,2,3,4,11,22,44,44,23,95,77,24,48,48,19,18,90,78,78,56,44,86,44,22,11];

document.write(mergesort(array,10));
