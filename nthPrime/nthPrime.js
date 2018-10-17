/*
a prime number is a number greater than 1 that cannot be divided by any number
other than 1 and itself.  for example 2 is a prime number.  5 is another prime
number. 4 can be divided by 2 so it isn't prime.  15 can be divided by 3 or 5
so it also isn't prime.  17 cannot be divided by anything but 1 or 17 so it is
prime.

find the nth prime number.

ex:
input: 5
output: 11
*/

/*
PSEUDO CODE

Declare counter = 0
D

loop to number (start at 2, num - 1, i++)
  if num % i === 0 
    return false
return true

if(isPrime(num)){
  counter += 1
}
Stop when counter value equals num
  if(counter == num) {
 return num
}

function isPrime(num) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
Increase count everytime isPrime is true
if(isPrime(num)){
  count += 1
}
Stop when counter value equals num
  if(counter == num) {
 return 
}
*/
/*
PSEUDO CODE
Declare counter

Check if number is prime with loop 
  if number divided by iterator remainder is 0
    return false
return true

Create loop to iterate through number (for(let i=0; counter<=num;i++))
  if isPrime is true
    increase counter 
  if counter == num
    return num
*/