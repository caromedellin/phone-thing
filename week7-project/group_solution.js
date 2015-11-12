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