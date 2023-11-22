const repeatString = function(string,num) {
if (num<0) {
    return ('ERROR');
}
else {
    let y ="";
    for (i=0;i< num; i++){
        y+=string;
    }
return(y);    
}
};

// Do not edit below this line
module.exports = repeatString;

