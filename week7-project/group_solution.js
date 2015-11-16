/*
Step 2: Pseudocode for Group Project (written by James Artz)
Overview: The group project is composed of 3 functions. The names of
these functions are Sum, Mean, and Median.
Function 1: Sum
Input: an array of integers
Output: an integer (the sum of all the integers in the input array)
Steps:
Create a function called Sum that accepts an array of integers as its
input.
Define a variable called arraySum that will be equal to the value that
is the sum of all the integers in the input array.
Return the value of arraySum (i.e., the sum of all the integers in the
input array).
Function 2: Mean
Input: an array of integers
Output: an integer (the sum of all the integers in the input array,
divided by the number of integers in the array)
Steps:
Create a function called Mean that accepts an array of integers as its
input.
Define a variable called arrayLength that is equal to the number of
integers in the array.
Define a variable called arraySum that will be equal to the value that
is the sum of all the integers in the input array.
Define a variable called arrayMean that returns the result of dividing
arraySum by arrayLength (i.e., arrayMean = arraySum/arrayLength).
Return the value of arrayMean.
Function 3: Median
Input: an array of integers
Output: an integer (see steps below for clarification of what this
integer is)
Steps:
Create a variable called oddMedianIndex.
Create a variable called evenMedianIndex1.
Create a variable called evenMedianIndex2.
Create a variable called evenMedianOutput.
Sort the integers in the array so that they ascend from lowest to
highest.
Determine whether the input array has an even or odd number of
integers.
If the input array has an odd number of integers:
  divide the number of integers in the array by 2.
  round UP this result to the next integer.
  Set the variable oddMedianIndex equal to the result of the previous
  two steps.
  Look up the integer in the input array that is located at
  oddMedianIndex's position.
  Return the integer located at oddMedianIndex's position.
  END.
If the input array has an even number of integers:
  divide the number of integers in the array by 2.
  Set evenMedianIndex1 equal to the result of the previous step.
  divide the number of integers in the array by 2, again.
  Set evenMedianIndex2 equal to (the result of previous step + 1)
    i.e., you're going to want these two results to give you the index
    values of the "middle two" integers in the array.
  Look up the integers in the array that are located at the index
  values stored as evenMedianIndex1 and evenMedianIndex2.
  Add these 2 integers together.
    i.e., the values of 2 integers in the array, don't add
    evenMedianIndex1 and evenMedianIndex2 together.
  Divide the result of adding these "middle two" integers together by
  2.
    i.e., you're taking the average of these two integers.
  Set evenMedianOutput equal to the result of this division.
  Return evenMedianOutput.
  END.
Function 3, Median, should return EITHER the integer from the input
array located at oddMedianIndex's position, OR the integer that is
calculated and stored in the variable evenMedianOutput.
A message from James to Syema and Carolina:
Hey guys, sorry for the insanely long pseudocode! I hope it all makes
sense! I talked to Emmanuel to get clarification on a question that I
had regarding the rules for this group project: when Luis sent me the
user stories, I wanted to get in touch with him to get some
clarification about what he sent me. But Emmanuel confirmed that this
is "cheating", i.e., like the game of telephone, you're not supposed
to make sure you heard what you think you heard, you just pass on the
message...
So I wasn't allowed to send Luis a message and talk with him about
what he sent me... which I would have liked to have done. Anyway, I
hope my pseudocode is helpful to you guys, and if it's not, I think
the basic idea of what these functions are designed to do is
encapsulated by their names - i.e., Sum, Mean, and Median. Hope this
helps, or at least makes things clear enough to get the message through!
Good luck!
*/

// Loved the message! (This is Carolina) I'll start on function 1
//Function 1: Sum
//Input: an array of integers
//Output: an integer (the sum of all the integers in the input array)
//Steps:

//Create a function called Sum that accepts an array of integers as its
//input.
//SOME DRIVER CODE too:
var array = [1,2,3,4,5,6,7,8,9,10,11]
// var Sum = function (array){

// };

//Define a variable called arraySum that will be equal to the value that
//is the sum of all the integers in the input array.

// var Sum = function (array){
//   var arraySum = array.reduce((a, b) => a + b);
// };
// console.log(Sum(array));

//Return the value of arraySum (i.e., the sum of all the integers in the
//input array).

var Sum = function (array){
  var arraySum = array.reduce((a, b) => a + b);
  return arraySum;
};
console.log(Sum(array)); //driver code for me

//-----------SECOND FUNCTION-------------------
// Function 2: Mean
// Input: an array of integers
// Output: an integer (the sum of all the integers in the input array,
// divided by the number of integers in the array)
 var integers = [1,2,3,5,6,7,8,9,10,11,12,13];
// Steps:
// Create a function called Mean that accepts an array of integers as its
// input.

// var Mean = function(integers){};


// Define a variable called arrayLength that is equal to the number of
// integers in the array.

// var Mean = function(integers){
//   var arrayLength = integers.length;
//   console.log(arrayLength);
// };
// Mean(integers);

// Define a variable called arraySum that will be equal to the value that
// is the sum of all the integers in the input array.

// var Mean = function(integers){
//   var arrayLength = integers.length;
//   var arraySum = integers.reduce((a, b) => a + b);
//   console.log(arraySum);
// };
// Mean(integers);

// Define a variable called arrayMean that returns the result of dividing
// arraySum by arrayLength (i.e., arrayMean = arraySum/arrayLength).
// Return the value of arrayMean.

var Mean = function(integers){
  var arrayLength = integers.length;
  var arraySum = integers.reduce((a, b) => a + b);
  var arrayMean = arraySum /arrayLength;
  console.log(arrayMean);
};
Mean(integers);

// Function 3: Median (Syema Ailia)
// Input: an array of integers
// Output: an integer (see steps below for clarification of what this
// integer is)
// Steps:
// Create a variable called oddMedianIndex.
// Create a variable called evenMedianIndex1.
// Create a variable called evenMedianIndex2.
// Create a variable called evenMedianOutput.
// Sort the integers in the array so that they ascend from lowest to
// highest.
// Determine whether the input array has an even or odd number of
// integers.
// If the input array has an odd number of integers:
//   divide the number of integers in the array by 2.
//   round UP this result to the next integer.
//   Set the variable oddMedianIndex equal to the result of the previous
//   two steps.
//   Look up the integer in the input array that is located at
//   oddMedianIndex's position.
//   Return the integer located at oddMedianIndex's position.
//   END.

var array = [1,2,3,5,6,7,8,9,10,11,12]

var Median = function(array) {
  var integerLength = array.length;
  if (integerLength % 2 !== 0)  {
  var odd_num = integerLength / 2;
  oddMedianIndex = Math.ceil(odd_num);
  return array[oddMedianIndex]
}
}
console.log(Median(array));

// If the input array has an even number of integers:
//   divide the number of integers in the array by 2.
//   Set evenMedianIndex1 equal to the result of the previous step.
//   divide the number of integers in the array by 2, again.
//   Set evenMedianIndex2 equal to (the result of previous step + 1)
//     i.e., you're going to want these two results to give you the index
//     values of the "middle two" integers in the array.
//   Look up the integers in the array that are located at the index
//   values stored as evenMedianIndex1 and evenMedianIndex2.
//   Add these 2 integers together.
//     i.e., the values of 2 integers in the array, don't add
//     evenMedianIndex1 and evenMedianIndex2 together.
//   Divide the result of adding these "middle two" integers together by
//   2.
//     i.e., you're taking the average of these two integers.
//   Set evenMedianOutput equal to the result of this division.
//   Return evenMedianOutput.
//   END.
var Median = function(array) {
  var integerLength = array.length;
  if (integerLength % 2 == 0) {
  var evenMedianIndex1 = integerLength / 2;
  var evenMedianIndex2 = (evenMedianIndex1 / 2) + 1;
  var evenMedianOutput = (array[evenMedianIndex1] + array[evenMedianIndex2]) / 2;
  return evenMedianOutput;
}
}
console.log(Median(array));






/*
  Release 4 part 1: Refactor
  Person 5: Refactor (by Bernice Anne W. Chua)
*/
var sum = function(integers_array){
  return integers_array.reduce((a, b) => a + b);
};
console.log("Sum of [1, 2, 3, 4]: " + sum([1, 2, 3, 4]));
console.log("Sum of [1, 2, 3, 4, 5]: " + sum([1, 2, 3, 4, 5]));
console.log("Sum of integers = [1,2,3,5,6,7,8,9,10,11,12,13]: " + sum(integers));

var mean = function(integers_array){
  return Sum(integers_array) / integers_array.length;
};
console.log("Mean of [1, 2, 3, 4]: " + mean([1, 2, 3, 4]));
console.log("Mean of [1, 2, 3, 4, 5]: " + mean([1, 2, 3, 4, 5]));
console.log("Mean of integers = [1,2,3,5,6,7,8,9,10,11,12,13]: " + mean(integers));

var median = function(numbersArray) {
  var sortedNumbers = numbersArray.sort();  // Numbers need to be in order to find the median.
  var middleIndexOfNumbers = sortedNumbers.length / 2;
  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[(middleIndexOfNumbers) - 1] + sortedNumbers[middleIndexOfNumbers]) / 2.0;
    // I put "- 1" because the index of an array starts at zero.
  } else {
    return sortedNumbers[Math.floor(sortedNumbers.length / 2)];
    // I put "- 1" because the index of an array starts at zero.
  }
};
console.log("Median of [1, 2, 3, 4]: " + median([1, 2, 3, 4]));
console.log("Median of [1, 2, 3, 4, 5]: " + median([1, 2, 3, 4, 5]));
console.log("Median of integers = [1,2,3,5,6,7,8,9,10,11,12,13]: ");
console.log(median([1,2,3,5,6,7,8,9,10,11,12,13]));
console.log("Median of array = [1,2,3,5,6,7,8,9,10,11,12]: ");
console.log(median([1,2,3,5,6,7,8,9,10,11,12]));

___________________________________________________________________________________

// Release 4 - Part 2: Translate to User stories
// Person 6: Dan Andersen



// Function 1: var sum = function(integers_array) {

// As a user, I want to take a list of numbers and enter them into this function.
// The function needs to take all of the numbers and add them together. Once the
// total is calculated, the function should return a readable sentence that lists
// the original list of numbers and states what their summed total is.
//     eg: Sum of [1, 2, 3, 4]: 10



// Function 2: var mean = function(integers_array){

// As a user, I want to take a list of numbers and use the sum function on them
// to calculate the total. Then I want to divide that number by the number of values
// in my original list. When I run my mean function on a list of numbers I want to
// recieve a printout with the list of numbers and a statement including what the
// mean of those numbers is.
//     eg: Mean of [1, 2, 3, 4]: 2.5



// Function 3: var median = function(numbersArray) {

// As a user, I want to take a list of numbers and when I run the median function
// on them, the numbers must be put in order from smallest to largest. Next, the
// function must locate the middle number and print out that number as the median.
// If there are an even number of values, the function must take the average of
// the two middle-most numbers and return that as the median.
//     eg: Median of [1, 2, 3, 4]: 2.5