//SOLUTION 1
function LongestWord(sen) { 
    let splitSen = sen.split(' ');
    let longestNum = 0;
    let longestWord = '';
    
    splitSen.forEach(word => {
        if(word.length > longestNum){
            longestNum = word.length;
            longestWord = word;
        }
    })
    return longestWord; 
}
//SOLUTION 2
function LongestWord(sen) {
    sen = sen.trim();
    sen = sen.replace(/[^a-zA-Zsd]/g, '');

    var arr = sen.split(' ');
    arr.sort(function(a, b) {return b.length - a.length});
    return arr.shift();
}