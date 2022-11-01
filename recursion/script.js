function pow(x,n){
    let res = 1;
    for(let i = 0; i<n; i++){
        res *= x;
    }
    return res;
}
function pow(x,n){
    if(n==1){
        return x;
    }
    else{
        return x * pow(x, n-1);
    }
    
}

pow(2,2);

function factorial(x) {
    if(x==0)
        return 1;
    return x * factorial(x-1);
    
}
console.log(factorial(1));