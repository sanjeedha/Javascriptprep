// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
//     In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
//     The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].


function uniteUnique(arr) {

    var args = [...arguments];    //to get all the arguments


var len = [];

for(var i=0;i<args.length;i++){

for(var j=0;j<args[i].length;j++){

    // console.log(args[i][j]);

    if(!len.includes(args[i][j])){
        len.push(args[i][j]);
    }

}

}

console.log(len);


    return len;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);