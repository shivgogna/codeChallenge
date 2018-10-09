/*
count from 1 to num.  if iterator is evenly divisible by a instead of the iterator
insert 'fizz'. if iterator is evenly divisible by b instead of the iterator
insert 'buzz'.  if the iterator is evenly divisible by BOTH a and b instead of
the iterator insert 'fizzbuzz'.

ex:
input: 15, 3, 5
output: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,
'fizzbuzz',16,17,'fizz',19,'buzz']
*/

/*
PESUDO CODE
Declare empty array
Create loop, end at num
  if statement num[i] / a == 0 and num[i] / b == 0 
    pass fizzbuzz in arr
  else if num[i] / a == 0
    pass fizz in arr
  else if num[i] / b == 0
    pass buzz in arr
  else 
    pass num[i] in arr
*/

function fizzbuzzKing(num, a, b){
    let fbArr = [];
    for(let i = 0; i <= num; i++) {
      if(i % a === 0 && i % b === 0) {
        fbArr.push('fizzbuzz');
      } else if(i % a === 0) {
        fbArr.push('fizz');
      }else if(i % b === 0) {
        fbArr.push('buzz');
      }else{
        fbArr.push(i)
      }
    }
    return fbArr;
  }
  fizzbuzzKing(15, 3, 5)
