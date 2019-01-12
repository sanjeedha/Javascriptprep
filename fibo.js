function fibonacci(num){
    if(num<2){
        return num;
    }
    else{
        return fibonacci(num-2)+fibonacci(num-1);
    }
}

console.log(fibonacci(9));