//print number from 1 to 100
//multiples of 3 - Fizz
//multiples of 5 - Buzz
//multiples of both 3 and 5 - Fizzbuzz


for(var i=0;i<=100;i++){

    if((i%5==0)&&(i%3==0))
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}