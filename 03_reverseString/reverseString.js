const reverseString = function(string) {
    let revString="";
    const len = string.length;
for(let i = 0;i<len;i++){
    revString+=string[len-i-1];
}
return revString;
};

// Do not edit below this line
module.exports = reverseString;
