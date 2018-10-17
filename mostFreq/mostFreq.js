/*  can be done without an object
return the most frequent element in a string stating how many times it occured

ex:
input: [1,3,7,1,3,7,1,3,1]
output: '1 occurs 4 times'
*/
/*
PSEUDO CODE
Declare object 
Declare variable set to 0
Declare variable to save key of most freq
Declare loop 
  if i is in object (key)
    increase value (counter)
  if i is not in object (key) 
    add i to object and set value to 1
loop through object (for in loop)
  if num is greater than mostFreq variable, replace it
return string variable of num of most freq occurs most freq value times
*/