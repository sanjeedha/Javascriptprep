//Given a string, return a new string with reversed order of characters.

function reversal(str){
    var final = '';

    for(var i=str.length-1; i>=0; i--)
    {
        final = final + str[i];
    }
    return final;
}

function reversalinbuilt(str){
var temp = str.split('');
temp.reverse();
str = temp.join('');
return temp;
}

function revrec(str){

    if(str===""){
        return "";
    }
    else{
        return revrec(str.substr(1)) + str.charAt(0);
    }

}
console.log(reversal("apple"));
console.log(reversalinbuilt("apple"));
console.log(revrec("apple"));