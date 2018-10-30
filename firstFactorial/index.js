
//SOLUTION 1
function FirstFactorial(num) { 
    if(num === 1) return 1;
    if(num > 1) {
        return num * FirstFactorial(num - 1);
    }
}