const removeFromArray = function(testArray,searchNum) {
indexToRemove= testArray.indexOf(searchNum);
return testArray.splice(indexToRemove,1);
};

// Do not edit below this line
module.exports = removeFromArray;
