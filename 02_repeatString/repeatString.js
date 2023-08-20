const repeatString = function(string , num) {
    output=""
    if(num < 0)
    return 'ERROR'
    while(num--){
        output+=string
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
