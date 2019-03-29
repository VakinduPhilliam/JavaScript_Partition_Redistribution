
/* The following function iterates through an array of elements, identifies odd, or even numbers and stores them separately. */
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

//Run function

var array=[56,1,3,44,12,5,7,45,11,13,46,86,24,35,79,97,13,35,75,23,56,45,86,80,97,13,46,86,24];

m(array);

//Call storage variables

document.write("Odd Numbers: "+odd+"<p>");
document.write("Even Numbers: "+even);
